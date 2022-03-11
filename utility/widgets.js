module.exports.response = (statusCode, message) => {
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify(message),
    };
}

module.exports.convertData = (fields, data) => {
    let dataFinal = {};
    Object.keys(fields).forEach((fieldName) => {
        console.log('fieldName', fieldName)
        dataFinal[fieldName] = data[fieldName] || fields[fieldName].default
    });
    return dataFinal;
}