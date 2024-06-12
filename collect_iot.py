# ------------------------------------------------------------------------------
# This script receives spatial input data from the HoloLens, which comprises:
# 1) Head pose, 2) Eye ray, 3) Hand tracking, and publishes it to AWS IoT.
# Press esc to stop.
# ------------------------------------------------------------------------------

from pynput import keyboard
import hl2ss
import hl2ss_lnm
from awscrt import mqtt, http
from awsiot import mqtt_connection_builder
import threading
import json
import sys
import time
import numpy as np
from utils.command_line_utils import CommandLineUtils

# Settings --------------------------------------------------------------------

# HoloLens address
host = '192.168.35.90'

# AWS IoT settings
cmdData = CommandLineUtils.parse_sample_input_pubsub()
received_count = 0
received_all_event = threading.Event()


def on_connection_interrupted(connection, error, **kwargs):
    print("Connection interrupted. error: {}".format(error))


def on_connection_resumed(connection, return_code, session_present, **kwargs):
    print("Connection resumed. return_code: {} session_present: {}".format(return_code, session_present))
    if return_code == mqtt.ConnectReturnCode.ACCEPTED and not session_present:
        resubscribe_future, _ = connection.resubscribe_existing_topics()
        resubscribe_future.add_done_callback(on_resubscribe_complete)


def on_resubscribe_complete(resubscribe_future):
    resubscribe_results = resubscribe_future.result()
    print("Resubscribe results: {}".format(resubscribe_results))
    for topic, qos in resubscribe_results['topics']:
        if qos is None:
            sys.exit("Server rejected resubscribe to topic: {}".format(topic))


def on_message_received(topic, payload, dup, qos, retain, **kwargs):
    print("Received message from topic '{}': {}".format(topic, payload))
    global received_count
    received_count += 1
    if received_count == cmdData.input_count:
        received_all_event.set()


proxy_options = None
if cmdData.input_proxy_host is not None and cmdData.input_proxy_port != 0:
    proxy_options = http.HttpProxyOptions(
        host_name=cmdData.input_proxy_host,
        port=cmdData.input_proxy_port)

mqtt_connection = mqtt_connection_builder.mtls_from_path(
    endpoint=cmdData.input_endpoint,
    port=cmdData.input_port,
    cert_filepath=cmdData.input_cert,
    pri_key_filepath=cmdData.input_key,
    ca_filepath=cmdData.input_ca,
    on_connection_interrupted=on_connection_interrupted,
    on_connection_resumed=on_connection_resumed,
    client_id=cmdData.input_clientId,
    clean_session=False,
    keep_alive_secs=30,
    http_proxy_options=proxy_options)

connect_future = mqtt_connection.connect()
connect_future.result()
print("Connected!")

message_topic = cmdData.input_topic

# ------------------------------------------------------------------------------

enable = True


def on_press(key):
    global enable
    enable = key != keyboard.Key.esc
    return enable


listener = keyboard.Listener(on_press=on_press)
listener.start()

client = hl2ss_lnm.rx_si(host, hl2ss.StreamPort.SPATIAL_INPUT)
client.open()


def convert_ndarray(obj):
    if isinstance(obj, np.ndarray):
        return obj.tolist()
    elif isinstance(obj, dict):
        return {key: convert_ndarray(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [convert_ndarray(element) for element in obj]
    else:
        return obj


class SafeEncoder(json.JSONEncoder):
    def default(self, obj):
        try:
            return convert_ndarray(obj)
        except TypeError:
            return None

packet_count = 0
skip_rate = 10

while enable:
    data = client.get_next_packet()
    packet_count += 1

    if packet_count % skip_rate != 0:
        continue

    si = hl2ss.unpack_si(data.payload)
    from random import randint
    rand = randint(0, 100)
    if rand > 5:
        continue
    message = {'timestamp': data.timestamp, 'data': {}}

    if si.is_valid_head_pose():
        head_pose = si.get_head_pose()
        message['data']['head_pose'] = {
            'position': convert_ndarray(head_pose.position),
            'forward': convert_ndarray(head_pose.forward),
            'up': convert_ndarray(head_pose.up)
        }

    if si.is_valid_eye_ray():
        eye_ray = si.get_eye_ray()
        message['data']['eye_ray'] = {
            'origin': convert_ndarray(eye_ray.origin),
            'direction': convert_ndarray(eye_ray.direction)
        }

    if si.is_valid_hand_left():
        hand_left = si.get_hand_left()
        pose = hand_left.get_joint_pose(hl2ss.SI_HandJointKind.Wrist)
        message['data']['hand_left'] = {
            'position': convert_ndarray(pose.position),
            'orientation': convert_ndarray(pose.orientation),
            'radius': pose.radius,
            'accuracy': pose.accuracy
        }

    if si.is_valid_hand_right():
        hand_right = si.get_hand_right()
        pose = hand_right.get_joint_pose(hl2ss.SI_HandJointKind.Wrist)
        message['data']['hand_right'] = {
            'position': convert_ndarray(pose.position),
            'orientation': convert_ndarray(pose.orientation),
            'radius': pose.radius,
            'accuracy': pose.accuracy
        }

    try:
        message_json = json.dumps(message, cls=SafeEncoder)
        mqtt_connection.publish(
            topic=message_topic,
            payload=message_json,
            qos=mqtt.QoS.AT_LEAST_ONCE
        )
    except TypeError as e:
        print(f"Serialization error: {e}")
    time.sleep(0.033)
client.close()
listener.join()

disconnect_future = mqtt_connection.disconnect()
disconnect_future.result()
print("Disconnected!")
