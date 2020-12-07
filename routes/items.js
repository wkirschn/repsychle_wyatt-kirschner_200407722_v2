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
                title: 'Brief Item Directory',
                items:items,
                layout: 'layout.hbs'
            })
        }
    })




})
/* GET item database view. */
router.get('/all', function(req, res, next) {

    //1. Fetch the Items to place onto the view
    Item.find((err, items) =>
    {
        if(err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('items/all', {
                title: 'All Items Defined',
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
//POST items
router.post('/add', (req,res, next) =>
{
    //use mongooseDB
    Item.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        resin_id: req.body.resin_id,
        disposal_method: req.body.disposal_method,
        eco_comment: req.body.eco_comment,
        ecoScore: req.body.ecoScore

    }, (err, item) => {
        if(err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/items')
        }
    })
})

// GET items/delete/ - colon in the path represents a URL parameter

router.get('/delete/:_id', (req,res, next) => {
    //Store the selected id in a local variable
    var _id = req.params._id;
    // Use Mongoose to delete the selected document from the DB
    Item.remove({_id: _id}, (err) =>
    {
        if(err, item) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/items')
        }



    })

})

//Get items / edit / ... populate edit with the existing task values

router.get('/edit/:_id', function(req, res, next) {


    var _id = req.params._id;

    //1. Fetch the Items to place onto the view
    Item.findById(_id,(err, items) =>
    {
        if(err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('items/edit', {
                title: 'Edit Items View',
                items:items
            })
        }
    })




})

//POST item update
router.post('/edit/:_id', (req,res, next) =>
{
    var _id = req.params._id

    var item = new Item({
        _id:  _id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        resin_id: req.body.resin_id,
        disposal_method: req.body.disposal_method,
        eco_comment: req.body.eco_comment,
        ecoScore: req.body.ecoScore

    })
    Item.update({_id: _id}, item, (err) => {
        if(err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/items')
        }
    })

})







module.exports = router;