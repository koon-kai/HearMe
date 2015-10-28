var express = require('express');
var router = express.Router();


router.get('/signin', (req,res) => {  
  res.render('admin');   
});

router.post('/signin', (req, res) => {
  var administrator = req.body;
  console.log(administrator);
  res.json({success: true});
});

module.exports = router;