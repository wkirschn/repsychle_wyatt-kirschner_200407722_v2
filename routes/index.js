//link to the express package
var express = require('express');
//brings in a new express route to handle http requests
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RePsychle' });
});

router.get('/next', function(req, res, next)  {
  res.render('index', { title: 'Next - Express'})
});

router.get('/about', function(req,res,next)
{
  res.render('about', { title: 'About - Express'})
});

router.get('/add', function(req,res,next)
{
  res.render('add', { title: 'Add Entry - RePsychle'})
});

router.get('/view', function(req,res,next)
{
  res.render('add', { title: 'View Entry - RePsychle'})
});




//exposes this file as public

module.exports = router;
