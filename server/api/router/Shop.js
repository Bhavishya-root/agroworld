const router = require('express').Router();
const shopController = require('../controller/Shop')
const { upload } = require('../middleware/multer')

router.post('/shopdata', shopController.shopData)
router.post('/fileupload', upload.single('file'), shopController.fileupload)
module.exports = router;