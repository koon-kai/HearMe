var express = require('express');
var router = express.Router();


router.get('/signin', (req,res) => {  
  res.render('signin');   
});

router.get('/workbench', (req, res) => {
  res.render('admin');
})

router.post('/signin', (req, res) => {
  var user = req.body;
  console.log(user);
  res.json({success: true});
});

module.exports = router;