import json
from urlparse import urlparse
import boto3
from GPSPhoto import gpsphoto
from datetime import datetime

print('Loading function')

s3 = boto3.client('s3')
dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    #print("Received event: " + json.dumps(event, indent=2))

    # Get the object from the event and show its content type
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']
    try:
        print("trying to get " + key + " from bucket " + bucket)
        response = s3.get_object(Bucket=bucket, Key=key)
        download_path = '/tmp/foo.jpg'
        s3.download_file(bucket, key, download_path)
        
        print(response)
        print(download_path)
        
        data = gpsphoto.getGPSData(download_path)
        print(data['Latitude'], data['Longitude'])
        latLon = "(" + str(data['Latitude']) + ", " + str(data['Longitude']) + ")"
        now = datetime.now()
        current_time = now.isoformat()
        dynamodb.put_item(TableName='Dogs', Item={'location_found':{'S':latLon},'datetime_found':{'S':current_time}})
        print("CONTENT TYPE: " + response['ContentType'])
        return response['ContentType']
    except Exception as e:
        print(e)
        print('Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.'.format(key, bucket))
        raise e
