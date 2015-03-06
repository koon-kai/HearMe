var express = require('express');
var router = express.Router();
var redis = require('../db.js');

/* GET home page. */
router.get('/', function(req, res) {
    redis.smembers('think', function(err, replies) {
        console.log(replies);
        res.render('index', { content: replies});
    })
    //console.log(list);
    
});

module.exports = router;
