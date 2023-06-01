const express = require('express');
const router = express.Router();
const CrackedList = require('../models/CrackedList');
const validateHash = require('../validators/hashValidator');
const detectHashAlgorithm = require('../validators/hashAlgorithmDetector');

// Создать новый список взломанных слов
router.post('/', async (req, res) => {
  const {hash, cracked} = req.body;
  const algorithm = detectHashAlgorithm(hash);
  if (!algorithm) {
    res.status(400).json({error: "Unsupported hash type"});
  } else if (validateHash(algorithm, cracked, hash)) {
    const newCrackedList = new CrackedList({hash, cracked, algorithm});
    const savedCrackedList = await newCrackedList.save();
    res.json(savedCrackedList);
  } else {
    res.status(400).json({error: "Invalid hash value"});
  }
});

// Обновить список взломанных слов
router.patch('/:id', async (req, res) => {
  const {hash, cracked} = req.body;
  const algorithm = detectHashAlgorithm(hash);
  if (!algorithm) {
    res.status(400).json({error: "Unsupported hash type"});
  } else if (validateHash(algorithm, cracked, hash)) {
    const crackedList = await CrackedList.findByIdAndUpdate(req.params.id, {hash, cracked, algorithm}, {new: true});
    res.json(crackedList);
  } else {
    res.status(400).json({error: "Invalid hash value"});
  }
});

module.exports = router;
