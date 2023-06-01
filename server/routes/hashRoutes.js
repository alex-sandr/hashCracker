const express = require('express');
const Hash = require('../models/Hash');
const auth = require('../middleware/auth');
const identifyHash = require('../utils/hashIdentifier');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const hashes = await Hash.find({ user: req.user.userId });
  res.json(hashes);
});
router.patch('/:hashValue', auth, async (req, res) => {
  const hash = await Hash.findOne({ hash: req.params.hashValue});
  
  if (!hash) {
    return res.status(404).json({ message: 'Hash not found.' });
  }
  
  hash.cracked = req.body.cracked;
  await hash.save();

  res.json(hash);
});

router.post('/', auth, async (req, res) => {
  const hashes = req.body.hashes;
  const hashObjects = [];

  for (const hashValue of hashes) {
    const hashType = identifyHash(hashValue);

    if (hashObjects.length > 0 && hashObjects[0].hashType !== hashType) {
      return res.status(400).json({ message: 'All hashes must be of the same type.' });
    }

    const hash = new Hash({ hash: hashValue, hashType, user: req.user.userId });
    await hash.save();

    hashObjects.push(hash);
  }

  res.status(201).json(hashObjects);
});

router.get('/getAllHashes', async (req, res) => {
  const hashes = await Hash.find().populate('user', 'username');
  res.json(hashes);
});
module.exports = router;
