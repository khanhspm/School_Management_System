const express = require('express')
const router = express.Router()
const TeacherController = require('../app/controllers/teacherController')

router.get('/myclassteaching', TeacherController.myclass_teaching);
router.get('/timeteaching', TeacherController.getTimeTeaching);
router.get('/midtermscore', TeacherController.midtermScore);
router.get('/finaltermscore', TeacherController.finalScore);

module.exports = router