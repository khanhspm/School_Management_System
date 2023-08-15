const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    if (userId) {
      const user = await User.findById(userId);
      res.render('home', { user });
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    res.render('error', { error: err.message });
  }
});

module.exports = router;