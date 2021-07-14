const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
    shopname: String,
    shopctgry: String,
    image: {
        data: Buffer,
        contentType: String
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    }
}, { timestamps: true })

const shopModel = mongoose.model('ShopData', shopSchema)

module.exports = shopModel;
