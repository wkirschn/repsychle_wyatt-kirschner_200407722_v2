//link to the express package
var express = require('express');
//brings in a new express route to handle http requests
var router = express.Router();

// Reference the Item Model
const Item = require('../models/item');




/* GET item index view. */
router.get('/', function(req, res, next) {

    //1. Fetch the Items to place onto the view
    Item.find((err, items) =>
    {
        if(err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('items/index', {
                title: 'Item Directory',
                items:items
            })
        }
    })




})

// GET items add view

/* GET item index view. */
router.get('/add', (req,res, next) => {
    res.render('items/add')
})


module.exports = router;