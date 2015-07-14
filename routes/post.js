var express = require('express');
var router = express.Router();
var marked = require('marked');

var Post = require('../lib/model.js').Post;
var Photo = require('../lib/model.js').Photo;
var qiniu = require('../lib/qiniu.js');
var setting = require('../setting.js');

router.get('/posts', function(req, res) {

    Post.find({}).sort({createAt:-1}).exec(function(err,docs) {
        if (err) console.log(err);
        // console.log(docs);
        res.end(JSON.stringify(docs));  
    });
});

router.post('/post', function(req, res) {

    var post = req.body;
    console.log(post);
    post.content = marked(post.content);
    Post.create(post, function(err, doc) {
        console.log(doc);
        res.end(JSON.stringify(doc));
    })
});

router.get('/post/:id', function(req, res) {
    
    var _id = req.params.id;
    Post.find({'_id':_id}, function(err, doc) {
        console.log(doc);
       
        var post = doc[0];
        res.end(JSON.stringify(post));
    })
});

router.post('/photo/upload', function(req, res) {
    // console.log(req.body);
    console.log(req.files);
    image = req.files.imageFile;

    qiniu.uploadBuffer(image.buffer, image.name);
    var imageUrl = setting.QINIU_DOMAIN + image.name;

    Photo.create({ cdnUrl: imageUrl}, function(err, doc) {
        if (err) {}
        console.log(doc);
        var data = {imageUrl: imageUrl};
        res.end(JSON.stringify({data:data})); 
        
    });
});

module.exports = router;