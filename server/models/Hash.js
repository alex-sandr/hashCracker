const mongoose = require('mongoose');

const HashSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
  hashType: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cracked: {
    type: String,
    default: false,
  },
});


module.exports = mongoose.model('Hash', HashSchema);
