import json
import urllib.parse
import boto3
from PIL import Image
from io import BytesIO
from os import path

print('Loading function')


def get_object(bucket_name, object_name):
    """Retrieve an object from an Amazon S3 bucket

    :param bucket_name: string
    :param object_name: string
    :return: botocore.response.StreamingBody object. If error, return None.
    """

    # Retrieve the object
    s3 = boto3.client('s3')
    try:
        response = s3.get_object(Bucket=bucket_name, Key=object_name)
    except ClientError as e:
        # AllAccessDisabled error == bucket or object not found
        logging.error(e)
        return None
    # Return an open StreamingBody object
    return response['Body']

def detect_labels(bucket, key, region="us-east-1"):
    rekognition = boto3.client("rekognition", region)
    image = {"S3Object": {"Bucket": bucket, "Name": key}}
    response = rekognition.detect_labels(Image=image, MinConfidence=60.0)
    return response['Labels']

def get_frame(label, rek_results):
    for label in rek_results:
        if label['Name'] == 'Dog':
            if len(label['Instances']) > 1:
                raise Exception('Too many dogs')
            frame = {
                'Width': label['Instances'][0]['BoundingBox']['Width'],
                'Height': label['Instances'][0]['BoundingBox']['Height'],
                'Left': label['Instances'][0]['BoundingBox']['Left'],
                'Top': label['Instances'][0]['BoundingBox']['Top']
            }
            return frame

def lambda_handler(event, context):
    '''Facial Recoginitioin of Dog -> Extract Dog image OR return NOT A DOG'''

    # Get the object from the event and show its content type
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
    extension = path.splitext(key)[1].lower()
    if extension in ['.jpeg', '.jpg']:
        format = 'JPEG'
    if extension in ['.png']:
        format = 'PNG'

    try:
        results = detect_labels(bucket, key)
        frame = get_frame('Dog', results)
        image = get_object(bucket, key)
        img = Image.open(BytesIO(image))

        print(f"Rekognition: {frame}")
        return 0
    except Exception as e:
        print(e)
        print('Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.'.format(key, bucket))
        raise e
