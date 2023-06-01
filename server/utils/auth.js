require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const createAccessToken = (user) => {
  return jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '15m'});
}

const createRefreshToken = (user) => {
  return jwt.sign({userId: user.id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'});
}

const generateTokens = async (user, res) => {
  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict'});
  return accessToken;
}


const refreshTokens = async (oldRefreshToken) => {
  try {
    jwt.verify(oldRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({refreshToken: oldRefreshToken});
    if (!user) {
      throw new Error('Invalid refresh token');
    }
    return await generateTokens(user);
  } catch (err) {
    throw err;
  }
}

module.exports = {generateTokens, refreshTokens};
