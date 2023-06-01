const mongoose = require('mongoose');

const CrackedListSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true
  },
  cracked: {
    type: String,
    required: true
  },
  algorithm: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('CrackedList', CrackedListSchema);
