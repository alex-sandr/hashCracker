const mongoose = require('mongoose');

const WordlistSchema = new mongoose.Schema({
  words: {
    type: [String],
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Wordlist = mongoose.model('Wordlist', WordlistSchema);
module.exports = Wordlist;
