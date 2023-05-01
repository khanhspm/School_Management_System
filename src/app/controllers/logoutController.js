const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Kiểm tra email và mật khẩu có tồn tại trong database không
      const user = await User.findOne({ email });
      if (!user || !user.isValidPassword(password)) {
        throw new Error('Invalid email or password');
      }
  
      // Nếu thông tin đăng nhập hợp lệ, lưu user id vào session và redirect đến trang chủ
      req.session.userId = user._id;
      res.redirect('/');
    } catch (err) {
      res.render('login', { error: err.message });
    }
  });

module.exports = router;
