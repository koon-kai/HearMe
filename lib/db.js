
// var redis = require("redis").createClient();

// redis.on("error", function (err) {
//     console.log("Error " + err);
// });

// module.exports = redis;


var mongoose = require('mongoose');

// mongodb config
var mongoConfig = {
    host: 'localhost',
    port: '27017',
    db: 'secret'
};

// exports global mongodb connection
exports.mongoose = mongoose.connect('mongodb://'+mongoConfig['host']+':'+mongoConfig['port']+'/'+mongoConfig['db'], {safe: true});