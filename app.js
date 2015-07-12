
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

var routes = require('./routes/index');
var weixin = require('./routes/weixin');
var comment = require('./routes/comment');
var signin = require('./routes/signin');
var post = require('./routes/post');

var http = require('http');
var app = express();
// var server = http.createServer(app);

// var io = require('socket.io')(server);

var partials = require('express-partials');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());
app.use(multer({dest: 'public/uploads/', inMemory: true}));
//app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use('/', routes);
app.use('/', post);
app.use('/weixin', weixin);
app.use('/comment', comment);
app.use('/', signin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// io.on('connection', function (socket) {
 
//     socket.on('new content', function(data){
//         //console.log(data);
//         var content = mongoDB.collection('content');
//         //console.log(content);
//         data['updateTime'] = new Date()
//         content.insert(data, function(err, result){
//             //console.log(result);
//             io.sockets.emit('add content', data);
//         }); 

//         //socket.emit('add content' ,{content:data})
//         //socket.broadcast.emit('add content', {content:data});
        
//     })
// });

var debug = require('debug')('secret:server');


module.exports = app;
