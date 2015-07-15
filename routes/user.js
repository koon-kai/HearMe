var express = require('express');
var router = express.Router();


router.get('/signin', function(req,res) {  
    res.render('admin/signin', {layout:'base'});   
});

module.exports = router;