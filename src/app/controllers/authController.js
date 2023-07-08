const bcrypt = require('bcryptjs');
const Handlebars = require('handlebars');
const { validationResult } = require('express-validator');
const {session} = require('express-session')
const User = require('../models/User');

// Đăng ký trình xử lý trợ giúp "not"
Handlebars.registerHelper('not', function(value) {
  return !value;
});

// Hiển thị form đăng nhập
exports.getLoginForm = (req, res) => {
  res.render('login', { layout: 'login_layout' });
};

// Xử lý đăng nhập
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Kiểm tra xem người dùng có tồn tại không
    const user = await User.findOne({ email });

    if (!user) {
      req.flash('error_msg', 'Tên đăng nhập không đúng');
      return res.redirect('/');
    }

    // So sánh mật khẩu
    const isMatch = (password == user.password);

    if (isMatch) {
      // Lưu thông tin người dùng vào phiên đăng nhập
      req.session.user = user;
      isAdmin = user.isAdmin === true;
      return res.render('home', { layout: 'main', isAdmin });
    } else {
      req.flash('error_msg', 'Mật khẩu không đúng');
      return res.redirect('/');
    }
  } catch (err) {
    console.error(err);
    return res.redirect('/');
  }
};

// Đăng xuất
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
