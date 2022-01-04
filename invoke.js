const AWS = require("aws-sdk");

const lambdaConfig = {
  region: "eu-west-1",
  endpoint: "http://localhost:4566"
};

const lambda = new AWS.Lambda(lambdaConfig);

exports.main = async (body, arn) => {
  // invoke lambda
  const params = {
    FunctionName: arn,
    Payload: JSON.stringify(body)
  };
  return lambda.invoke(params).promise();
};

const run = async () => {
  const res = await module.exports.main(
    { name: "Larry Nodejs" },
    "myLambdaFunction"
  );
  console.log(res);
};

run();
