const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  
  const params = {
    TableName : 'Playlist',
    Key: {
      id: event.pathParameters.id
    }
  };

let result = await dynamoDb.delete(params).promise();

  return {
    body: JSON.stringify({
      message: "deleted succesfully",
      data: result
    })
  };

};
