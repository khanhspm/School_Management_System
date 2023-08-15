const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../src/app/models/user.model');
const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");



module.exports = User;