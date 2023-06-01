const crypto = require('crypto');

const validateHash = (algorithm, value, hash) => {
  const hashedValue = crypto.createHash(algorithm).update(value).digest('hex');
  return hashedValue === hash;
};

module.exports = validateHash;
