const express = require('express')
const router = express.Router()
const loginController = require('../app/controllers/loginController')

router.get('/', loginController.getLogin)
router.post('/', loginController.postLogin);
router.post('/logout', loginController.postLogout);

module.exports = router