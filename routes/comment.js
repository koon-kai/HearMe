var express = require('express');
var router = express.Router();


router.get('/comment', function(req, res) {
    res.render('comment', {layout:'base'});
});

router.get('/data', function(req,res) {
    var data = [
        {author: "Pete Hunt", text: "This is one comment"},
        {author: "Jordan Walke", text: "This is *another* comment"},
        {author: "koonkai", text: "This is koonkai comment"}
    ];

    console.log(data);
    
    res.end(JSON.stringify(data));    
});

router.post('/data', function(req, res) {
    console.log(req.body);

    var data = [
        {author: "Pete Hunt", text: "This is one comment"},
        {author: "Jordan Walke", text: "This is *another* comment"},
        {author: "koonkai", text: "This is koonkai comment"}
    ];

    
    res.end(JSON.stringify(data));  

});

module.exports = router;