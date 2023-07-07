// Xử lý lỗi 404
exports.notFound = (req, res) => {
    res.status(404).render('404');
  };
  