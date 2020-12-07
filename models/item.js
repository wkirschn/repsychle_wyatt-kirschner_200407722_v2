//
//     Name:        Wyatt Kirschner
//     Student ID:  200407722
//     Course:      COMP2068
//     Project:     Assignment 2
//

// incorporate format for Mongoose

const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
    {

        name:
            {
                type: String,
                required: 'Name is required',
                trim: true
            },
        description:
            {
                type: String,
                required: 'Please enter a description for the item.',
                trim: false

            },
        image:
            {
                type: String,
                required: 'Please include a link to an image to use',
                default:'https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_960_720.png',
                trim: false

            },
        resin_id:
            {
                type: String,
                required: 'Please include a Resin ID',
                default:'1',
                trim: false

            },
        disposal_method:
            {
                type: String,
                required: 'Please include a Disposal Method',
                default: 'Recycle',
                trim: false

            },
        eco_comment:
            {
                type: String,
                required: 'Please include an Eco Comment',
                trim: false

            },
        ecoScore:
            {
                type: String,
                required: 'Please include an EcoScore',
                trim: false,
                default: 'UNKNOWN'

            }
    }
)

// Make public


module.exports = mongoose.model('Item', itemSchema)
