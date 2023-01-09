const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
  event.Records.forEach(record => {
    let payload = JSON.parse(new Buffer(record.kinesis.data, 'base64').toString('ascii'));
    let activity = JSON.parse(payload);

    if (activity.ip !== undefined && activity.timestamp !== undefined) {
      ddb.put({
        TableName: 'click-stream-table',
        Item: {
          'IP': activity.ip,
          'Timestamp': activity.timestamp,
          'Browser': activity.browser,
          'URL': activity.url,
          'Referrer': activity.referrer,
          'OS': activity.os,
          'Country': activity.country,
          'Language': activity.language
        }
      }, function (err, data) {
        if (err) {
          context.fail(err);
        } else {
          context.succeed();
        }
      });
    } else {
      context.fail(new Error('Missing required keys ip and/or timestamp'));
    }
  });
}
