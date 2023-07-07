const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin } = require('../app/middlewares/authMiddleware');
const myclassController = require('../app/controllers/myclassController')

router.get('/',isAuthenticated, isAdmin, myclassController.myclass)

module.exports = router