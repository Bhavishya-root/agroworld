var multer = require('multer')
const path = require('path')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        // cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
        cb(null, file.originalname + '-' + Date.now() + ('.jpg' || 'png' || 'jpeg'))
    }
});

// const filefilter = (req, file, cb) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

var upload = multer({ storage: storage, });

module.exports = { upload }

// app.post('/', function (req, res) {


//     upload(req, res, function (err) {
//         if (err instanceof multer.MulterError) {
//             // A Multer error occurred when uploading.
//         } else {
//             res.send({ status: "true", msg: "img upload" })
//         }


//     })
// })