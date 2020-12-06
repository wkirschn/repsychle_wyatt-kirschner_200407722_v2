//link to the express package
var express = require('express');
//brings in a new express route to handle http requests
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('add', { title: 'RePsychle - Add Entry'})
});

module.exports = router;