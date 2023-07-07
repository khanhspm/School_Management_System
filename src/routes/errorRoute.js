const express = require('express');
const router = express.Router();
const errorController = require('../app/controllers/errorController');

router.get('/404',errorController.notFound);

module.exports = router;