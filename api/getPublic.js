module.exports.handler = (event, context, callback) => {
  console.log("getPublic");
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    },
    body: JSON.stringify({
      message: "Welcome! You are now a public"
    })
  };

  callback(null, response);
};
