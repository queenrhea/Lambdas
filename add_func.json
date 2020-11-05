const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  
  const { song_name, author } = event.body;
  
  const params = {
    
    TableName: "Playlist", // The name of your DynamoDB table
    
    Item: {
      id: context.awsRequestId,
      song_name: song_name,
      author: author
    }
    //console.log(Item);
  };
  
  try {
    let result = await documentClient.put(params).promise();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
        message: "added succesfully",
        data: result
      })
    };
    return response;
  } 
  
  catch(e) {
    return {
      statusCode: 200,
      body: JSON.stringify(e)
    };
  }
};
