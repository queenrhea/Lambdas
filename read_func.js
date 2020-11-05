const AWS = require('aws-sdk');
// Initialising the DynamoDB SDK
const documentClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    try {
        // Utilising the scan method to get all items in the table
        const data = await documentClient.scan({
            TableName: "Playlist" // The name of your DynamoDB table
          }).promise();
        const response = {
          statusCode: 200,
          body: JSON.stringify(data.Items)
        };
        return response;
    } catch(e) {
        return {
            statusCode: 200,
            body: JSON.stringify(e)
        };
    }
};
