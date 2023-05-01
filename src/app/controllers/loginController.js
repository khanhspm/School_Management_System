const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Tìm user với email tương ứng
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Kiểm tra mật khẩu
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    // Lưu user id vào session và redirect đến trang chủ
    req.session.userId = user._id;
    res.redirect('/');
  } catch (err) {
    res.render('login', { error: err.message });
  }
});

module.exports = router;
