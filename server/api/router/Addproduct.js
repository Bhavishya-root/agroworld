const router = require('express').Router();
const addproductController = require('../controller/Addproduct')

router.post('/addproduct', addproductController.addproduct)
module.exports = router