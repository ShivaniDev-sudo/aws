# AWS Kinesis and AWS Lambda: Real-time Application Monitoring and Analysis

The use case involves tracking application activity in real time. The goal of this stream processing is to allow for the tracking of activity as it happens, rather than after the fact. By using AWS Kinesis and AWS Lambda, it is possible to process and analyze large streams of data in real time, enabling the tracking of application activity as it occurs.

## File Descriptions

- `publish-activity-stream.js`: This code exports an AWS Lambda function that processes incoming data in real time using AWS Kinesis. When this function is triggered, it takes in an event and a context object as arguments, as well as a callback function.

- `record-processing-and-persistence.js`: This code exports an AWS Lambda function that processes records from an AWS Kinesis stream in real time and writes the data to an Amazon DynamoDB table. When this function is triggered, it takes in an event and a context object as arguments, as well as a callback function. The function then iterates over the records in the event, parsing each record's data payload as a JSON object and assigning it to the "activity" variable.

## Language

Nodejs, 
