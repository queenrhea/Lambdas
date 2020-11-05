const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    
    const { song_name, author } = event.body;
    
    const params = {
        
        TableName: "Playlist",
        
        
        Key: {
          id: event.pathParameters.id
        },
        
        UpdateExpression: "set song_name = :s, author = :a",
        ExpressionAttributeValues:{
            ":s": song_name,
            ":a": author
        },
        ReturnValues:"UPDATED_NEW"
    
  };
  
  try {
    let result = await documentClient.update(params).promise();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
        message: "Updated succesfully",
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
