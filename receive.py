import requests
import time
import hashlib

def fetch_data():
    url = "https://0esl4conil.execute-api.us-west-1.amazonaws.com/default/test"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if the request was successful
        data = response.json()  # Assuming the response is in JSON format
        return data  # Return the JSON data
    except requests.exceptions.RequestException:
        return None  # Ignore the error and return None

def encrypt(number):
    # Convert number to string, then to int, and then apply MD5 encryption
    return hashlib.md5(str(int(number)).encode()).hexdigest()

def main():
    while True:
        data = fetch_data()
        if data is not None and 'predictions' in data:
            predicted_label = data['predictions'][0]['predicted_label']
            for number in range(9):
                encrypted_number = encrypt(number)
                if encrypted_number == predicted_label:
                    print(f"Current User: {number}")
                    break  # Stop the loop if a match is found
        time.sleep(5)  # Wait for 3 seconds before making the next request

if __name__ == "__main__":
    main()
