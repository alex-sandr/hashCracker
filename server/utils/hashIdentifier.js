const HashIdentifier = require('hash-identifier');

module.exports = function identifyHash(hash) {
  const results = HashIdentifier.checkAlgorithm(hash);
  return results[0];
};
