const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    productname: String,
    productprice: Number,
    productimg: String
})

const addproduct = mongoose.model('Product', productSchema)

module.exports = addproduct;