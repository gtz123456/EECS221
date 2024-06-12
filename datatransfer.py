import json
import boto3
import os
import logging
import hashlib

# 设置日志记录
logger = logging.getLogger()
logger.setLevel(logging.INFO)

s3 = boto3.client('s3')
runtime = boto3.client('sagemaker-runtime')
iot = boto3.client('iot-data')


def lambda_handler(event, context):
    logger.info("Event: " + json.dumps(event))  # 记录事件信息
    try:
        # 直接处理来自 IoT 的 MQTT 消息
        data = event.get('data', None)
        if data is None:
            logger.error("No data found in message")
            return {
                'statusCode': 400,
                'body': json.dumps('No data found in message')
            }

        logger.info("Message Data: " + json.dumps(data))  # 记录数据

        # 将数据存储到 S3 (如果需要)
        s3_bucket = os.environ['S3_BUCKET']
        s3_key = "data/real_time_data.json"

        # 从 S3 读取现有文件内容
        try:
            s3_object = s3.get_object(Bucket=s3_bucket, Key=s3_key)
            existing_data = json.loads(s3_object['Body'].read().decode('utf-8'))
        except s3.exceptions.NoSuchKey:
            existing_data = []

        # 追加新数据到现有数据
        existing_data.append(data)

        # 将更新后的数据写回到 S3
        s3.put_object(Bucket=s3_bucket, Key=s3_key, Body=json.dumps(existing_data))

        # 准备模型的输入 (将 JSON 转换为 CSV)
        csv_input = convert_to_csv(data)

        # 调用模型端点
        endpoint_name = os.environ['MODEL_ENDPOINT']
        response = runtime.invoke_endpoint(
            EndpointName=endpoint_name,
            ContentType='text/csv',
            Body=csv_input
        )

        result = json.loads(response['Body'].read().decode())
        logger.info("Inference Result: " + json.dumps(result))  # 记录推断结果

        # 提取 predicted_label 并进行 MD5 加密
        predicted_label = str(result['predictions'][0]['predicted_label'])
        md5_hash = hashlib.md5(predicted_label.encode()).hexdigest()
        logger.info("MD5 Hash of predicted_label: " + md5_hash)  # 记录 MD5 哈希值

        # 将 MD5 哈希值替换 predicted_label
        result['predictions'][0]['predicted_label'] = md5_hash

        # 将加密后的结果写入到 S3
        s3_result_key = "data/result.json"
        s3.put_object(Bucket=s3_bucket, Key=s3_result_key, Body=json.dumps(result))

        # 将推断结果发布到另一个 MQTT 主题
        response_topic = os.environ['RESPONSE_TOPIC']
        iot.publish(
            topic=response_topic,
            qos=1,
            payload=json.dumps(result)
        )

        # 将结果直接返回给调用设备
        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Success',
                'result': result
            })
        }

    except Exception as e:
        logger.error("Error: " + str(e))
        return {
            'statusCode': 500,
            'body': json.dumps('Error')
        }


def convert_to_csv(data):
    # 提取 head_pose 数据
    head_pose = data['head_pose']
    position = head_pose['position']
    forward = head_pose['forward']
    up = head_pose['up']

    # 将数组拼接成一个 CSV 行
    csv_row = position + forward + up
    csv_output = ",".join(map(str, csv_row))

    return csv_output
