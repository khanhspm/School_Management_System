const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    // Kiểm tra xem email đã được sử dụng hay chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Email is already taken');
    }

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có giống nhau hay không
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    // Tạo user mới và lưu vào database
    const user = new User({ email, password });
    await user.save();

    // Lưu user id vào session và redirect đến trang chủ
    req.session.userId = user._id;
    res.redirect('/');
  } catch (err) {
    res.render('register', { error: err.message });
  }
});

module.exports = router;
