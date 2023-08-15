const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../app/controllers/authController');

// Hiển thị form đăng nhập
router.get('/', authController.getLoginForm);

// Xử lý đăng nhập
router.post(
  '/login',
  [
    check('email').notEmpty().withMessage('Vui lòng nhập tên đăng nhập'),
    check('password').notEmpty().withMessage('Vui lòng nhập mật khẩu')
  ],
  authController.login
);

// Đăng xuất
router.get('/logout', authController.logout);

module.exports = router;