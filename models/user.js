const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')
const User = new mongoose.Schema({
    username: String,
    password: String
})

User.plugin(plm)


// Public

module.expores = mongoose.model('User', User)