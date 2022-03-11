const db = require('../utility/db')
const { response, convertData } = require('../utility/widgets')

const fields = {
    key: { type: String },
    createdAt: { type: Date, default: new Date().toISOString() }
};

async function push(data) {
    let dt = convertData(fields, data);
    return db.put({
        TableName: 'queue-dev',
        Item: dt,
    })
        .promise()
        .then(() => {
            console.log(response(200, dt));
        })
        .catch((err) => {
            console.log(err);
            response(err.statusCode, err);
        })
};

// push({
//     key: "testkey1"
// });
async function get() {
    var params = {
        TableName: 'queue-dev',
        // KeyConditionExpression: "createdAt"
    };
    db.scan(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log(data.Items[0]);
            if(data.Count){
                var params_ = {
                    TableName: 'queue-dev',
                    Key: {
                        "key": data.Items[0].key
                    },
                }
                db.delete(params_, function (err, dt) {
                    if (err) {
                        console.log("Error", err);
                    } else {
                        console.log(dt);
                    }
                })
            }else{
                console.log("queue empty")
            }
            
        }
    });

}
get();