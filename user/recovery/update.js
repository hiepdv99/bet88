'use strict';

const api = require('../../utility/api')
const { response } = require('../../utility/widgets')

module.exports.handler = async (event, context, callback) => {
    let data = JSON.parse(event.body);
    await api.recoveryupdate(data).then(res => {
        return callback(null, response(200, res.data));
    }).catch(err => {
        return callback(null, response(400, err.response.data))
    });
};