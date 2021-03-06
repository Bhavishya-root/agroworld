const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    confirmpassword: String
})

const Users = mongoose.model('User', userSchema)

module.exports = Users