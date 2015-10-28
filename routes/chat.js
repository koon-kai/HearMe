var express = require('express');
var router = express.Router();

var Message = require('../lib/model.js').Message;

router.get('/api/messages', function(req, res) {
  Message.find({}).sort({createAt:-1}).exec(function(err,docs) {
    if (err) console.log(err);
    res.json(docs);
  });
});


router.post('/api/messages', function(req, res) {
  var message = req.body;
  Message.create(message, function(err, doc) {
    if (err) console.log(err);
    res.json(doc);
  })
});

module.exports = router;
