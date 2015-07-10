var express = require('express');
var router = express.Router();
// var mongoose = require('../lib/db.js').mongoose;
var Image = require('../lib/model.js').Image;
var qiniu = require('../lib/qiniu.js');
var setting = require('../setting.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {layout:'base'});
});

router.get('/new', function(req, res) {
    res.render('new', {layout: 'base'});
});

router.post('/upload', function(req, res) {
    // console.log(req.body);
    console.log(req.files);

    image = req.files.imageFile;

    qiniu.uploadBuffer(image.buffer, image.name);
    var imageUrl = setting.QINIU_DOMAIN + image.name;

    Image.create({ cdnUrl: imageUrl}, function(err, doc) {
        if (err) {}
        console.log(doc);
        var data = {imageUrl: imageUrl};
        res.end(JSON.stringify({data:data})); 
        
    });
});

module.exports = router;
