function initAWS() {
  AWS.config.region = "us-east-1";
}

$(document).ready(initAWS);

function getRegion() {
  return "us-east-1";
}

function getWebSocket() {
  return "wss://iw9sj2cr94.execute-api.us-east-1.amazonaws.com/Prod";
}

function getInstanceId() {
  return "b585afc9-d645-4eb1-a595-a481a4bfe0fa";
}

function getInstanceName() {
  return "dev-nsd";
}

function getBucketName() {
  return "awsconnectcpp-audio-bucket-name";
}

function getSolutionId() {
  return "SO0054";
}

function getUUID() {
  return "8d724d28-9b4c-406e-8c76-8487057679f6";
}

function getDashboardUsage() {
  return "Yes";
}
