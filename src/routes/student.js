const express = require('express')
const router = express.Router()
const StudentController = require('../app/controllers/studentController')

router.get('/profile', StudentController.getProfile);
router.get('/mygrade', StudentController.mygrade);
router.get('/myclass', StudentController.myclass);
// router.get('/',isAuthenticated, isAdmin, myclassController.myclass)

module.exports = router