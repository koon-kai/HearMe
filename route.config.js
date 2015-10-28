

var post = require('./routes/post');
var admin = require('./routes/admin');
var weixin = require('./routes/weixin');
var chat = require('./routes/chat');


const routes = [
  { path: '/', route: post },
  { path: '/admin', route: admin },
  { path: '/', route: weixin },
  { path: '/', route: chat },
]


module.exports = routes;