const shopModel = require('../model/Shop')




let shopData = async (req, res) => {

    let { shopname, shopctgry } = req.body
    const shopdata = { shopname, shopctgry }
    console.log(shopdata)
    await shopModel.insertMany(shopdata).then(dbres => {
        if (dbres !== null) {
            res.send({ status: "ok", msg: "data saved" })
        }
    }).catch(err => {
        res.send({ status: "ERR", msg: "something wrong" })
        console.log(err)
    })




}
let fileupload = async (req, res, next) => {
    const file = {
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: req.file.size
    }
    await shopModel.insertMany(file).then(dbres => {
        res.send({ status: "OK", massage: "file sussfully Upload" })
        console.log(file)
    }).catch(err => {
        res.send({ status: "ERR", massage: "file not upload" }, err)
    })
}
module.exports = { shopData, fileupload }

