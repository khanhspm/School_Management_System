const express = require('express')
const router = express.Router()
const StudentController = require('../app/controllers/studentController')

router.get('/profile', StudentController.getProfile);
router.get('/mygrade', StudentController.mygrade);
router.get('/myclass', StudentController.myclass);
router.get('/myteacher', StudentController.myteacher);
router.get('/teacher_contact', StudentController.teacher_contact);
router.get('/myclassteaching', StudentController.myclass_teaching);

module.exports = router