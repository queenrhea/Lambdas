const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: "Playlist",
    Key: {
      id: event.pathParameters.id
      //description: event.pathParameters.description
    },
  };

let result = await documentClient.get(params).promise();
  
   
  return {
    statusCode: 200,
    body: JSON.stringify(result.Item),
  };

};
