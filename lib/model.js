
var mongoose = require('./db.js').mongoose;

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var Post = new Schema({
    title    : String,
    content  : String,
    createAt : { type: Date, default: Date.now }
});


var Image = new Schema({
    originUrl: String,
    cdnUrl: String,
    createAt: { type: Date, default: Date.now }
});


exports.Post = mongoose.model('Post', Post);
exports.Image = mongoose.model('Image', Image);