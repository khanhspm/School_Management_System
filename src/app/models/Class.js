const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = new Schema({
    name: String,
    combination: String,
    image: String,
    createdAt: { type: Date, default: Date.now},
    UpdatedAt: { type: Date, default: Date.now},
  });

  module.exports = mongoose.model('Class', Class);