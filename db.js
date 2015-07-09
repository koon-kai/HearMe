
// var redis = require("redis").createClient();

// redis.on("error", function (err) {
//     console.log("Error " + err);
// });

// module.exports = redis;


var mongoskin = require('mongoskin');

// mongodb config
var mongoConfig = {
    host: 'localhost',
    port: '27017',
    db: 'secret'
};

// exports global mongodb connection
exports.mongoDB = mongoskin.db('mongodb://'+mongoConfig['host']+':'+mongoConfig['port']+'/'+mongoConfig['db'], {safe: true});