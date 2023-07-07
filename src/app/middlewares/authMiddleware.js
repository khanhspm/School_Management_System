// Kiểm tra xem người dùng đã đăng nhập chưa và xác thực quyền truy cập
exports.isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }

  res.redirect('/');
};

// Kiểm tra xem người dùng có quyền admin không
exports.isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.isAdmin) {
    return next();
  }

  res.redirect('/404');
};