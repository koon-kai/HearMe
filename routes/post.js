var express = require('express');
var router = express.Router();
var marked = require('marked');

var Post = require('../lib/model.js').Post;
var Photo = require('../lib/model.js').Photo;
var qiniu = require('../lib/qiniu.js');
var setting = require('../setting.js');

router.get('/api/posts', function(req, res) {

    Post.find({}).sort({createAt:-1}).exec(function(err,docs) {
        if (err) console.log(err);
        setTimeout(function() {
            res.json(docs);
        }, 1000);
    });
});

router.post('/api/posts', function(req, res) {

    var post = req.body;
    console.log(post);
    post.content = marked(post.content);
    Post.create(post, function(err, doc) {
        console.log(doc);
        res.json(doc);
    })
});

router.get('/api/posts/:id', function(req, res) {
    
    var _id = req.params.id;
    Post.find({'_id':_id}, function(err, docs) {
        // console.log(doc);
        setTimeout(function() {
            res.json(docs);
        }, 500);
        
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