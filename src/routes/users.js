const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
});

userSchema.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
