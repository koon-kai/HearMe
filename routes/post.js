var express = require('express');
var router = express.Router();

var Post = require('../lib/model.js').Post;


router.get('/posts', function(req, res) {

    var postList = [];
    Post.find({}, function(err,docs) {
        if (err) console.log(err);
        console.log(docs);
        // docs = [{title: "title1"},{title:"ttitle2"},{title:"title3"}]
        res.end(JSON.stringify(docs));  
    });
});

router.post('/post', function(req, res) {

    var post = req.body;
    console.log(post);
    Post.create(post, function(err, doc) {
        console.log(doc);
        // res.render('index', {layout:'base'});
        res.redirect('/');
    })
});

router.get('/post/:id', function(req, res) {
    console.log(req.params.id);
    var _id = req.params.id;
    Post.find({'_id':_id}, function(err, doc) {
        console.log(doc);
        //res.render('post',{layout:'base', post:doc});
        res.end(JSON.stringify(doc));
    })
});

module.exports = router;