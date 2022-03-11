const AWS = require("aws-sdk");

let options = {
    region: 'us-east-1'
}

module.exports = new AWS.DynamoDB.DocumentClient(options);