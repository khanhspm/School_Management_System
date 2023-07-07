const express = require('express')
const router = express.Router()
const StudentController = require('../app/controllers/studentController')

router.get('/mygrade', StudentController.getView);
router.get('/profile', StudentController.getProfile);
router.get('/mygrade', StudentController.mygrade);

module.exports = router