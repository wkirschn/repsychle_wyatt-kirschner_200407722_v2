//
//     Name:        Wyatt Kirschner
//     Student ID:  200407722
//     Course:      COMP2068
//     Project:     Assignment 2
//

//link to the express package
var express = require('express');
//brings in a new express route to handle http requests
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RePsychle' });
});

/*router.get('/next', function(req, res, next)  {
  res.render('index', { title: 'Next - Express'})
});*/

/*router.get('/about', function(req,res,next)
{
  res.render('about', { title: 'About - Express'})
});*/

/*router.get('/add', function(req,res,next)
{
  res.render('add', { title: 'Add Entry - RePsychle'})
});*/

/*router.get('/view', function(req,res,next)
{
  res.render('add', { title: 'View Entry - RePsychle'})
});*/

/* GET registration page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'RePsychle - Registration' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'RePsychle - Login' });
});

//Post /Register


router.post('/register', (req,res, next) =>
{
  User.register(new User({
    username: req.body.username
  }, req.body.password, (err, user) => {
    if(err) {
      console.log(err)
      res.end(err)
    }
    else {
     req.login(user, (err) => {
       res.redirect('/all')
     })
    }
  }))


})


//exposes this file as public

module.exports = router;
