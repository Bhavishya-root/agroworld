const router = require('express').Router();
const userController = require('../controller/User')

router.post('/registration', userController.registration)
router.post('/login', userController.login)

module.exports = router;