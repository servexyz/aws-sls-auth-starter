module.exports.handler = (event, context, callback) => {
  console.log("getProtected");
  console.log(event);

  const user = JSON.parse(event.requestContext.authorizer.user);
  console.log(user);

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    },
    body: JSON.stringify({
      private: [
        {
          id: user,
          message: "You've reached the protected route"
        }
      ]
    })
  };

  callback(null, response);
};
