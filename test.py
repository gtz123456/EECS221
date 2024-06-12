import json
import boto3
import os
import logging

# 设置日志记录
logger = logging.getLogger()
logger.setLevel(logging.INFO)

s3 = boto3.client('s3')


def lambda_handler(event, context):
    s3_bucket = os.environ['S3_BUCKET']
    s3_key = "data/result.json"

    # 从 S3 读取现有文件内容
    try:
        s3_object = s3.get_object(Bucket=s3_bucket, Key=s3_key)
        existing_data = json.loads(s3_object['Body'].read().decode('utf-8'))
    except s3.exceptions.NoSuchKey:
        existing_data = []

    try:
        # 检查是否存在 'predictions' 键
        if 'predictions' not in existing_data or len(existing_data['predictions']) == 0:
            raise KeyError("The key 'predictions' is missing or empty in the input data")

        # 提取预测标签
        predicted_label = existing_data['predictions'][0]['predicted_label']

        # 返回完整的 existing_data
        return {
            'statusCode': 200,
            'body': json.dumps(existing_data)
        }

    except KeyError as e:
        logger.error(f"Key error: {str(e)}")
        return {
            'statusCode': 400,
            'errorMessage': str(e)
        }
    except Exception as e:
        logger.error(f"An error occurred: {str(e)}")
        return {
            'statusCode': 500,
            'errorMessage': "An error occurred: " + str(e)
        }
