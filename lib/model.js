
var mongoose = require('./db.js').mongoose;

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var Post = new Schema({
  title    : String,
  content  : String,
  createAt : { type: Date, default: Date.now }
});

var Photo = new Schema({
  originUrl: String,
  cdnUrl: String,
  createAt: { type: Date, default: Date.now }
});

var Message = new Schema({
  name: String,
  text: String,
  createAt: { type: Date, default: Date.now }
})


exports.Post = mongoose.model('Post', Post);
exports.Photo = mongoose.model('Photo', Photo);
exports.Message = mongoose.model('Message', Message);