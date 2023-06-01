const express = require('express');
const User = require('../models/User');
const {generateTokens, refreshTokens} = require('../utils/auth');
const auth = require('../middleware/auth');

const router = express.Router();

// Регистрация
router.post('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
    res.status(200).json({username: user.username});

  } catch (err) {
    res.status(400).json({error: err.message});
  }
});
// Регистрация
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const accessToken = await generateTokens(user, res);
    res.json({accessToken});
  } catch (err) {
    res.status(400).json({error: err.message});
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (!user || !user.comparePassword(req.body.password)) {
      throw new Error('Invalid username or password');
    }
    const accessToken = await generateTokens(user, res);
    res.json({accessToken});
  } catch (err) {
    res.status(400).json({error: err.message});
  }
});

// Обновление токенов
router.post('/refresh_token', async (req, res) => {
  try {
    const {refreshToken} = req.body;
    const tokens = await refreshTokens(refreshToken);
    res.json(tokens);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
});
router.post('/logout', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
    user.refreshToken = null;
    user.save()
    res.status(200).json({ message: 'User logged out' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
