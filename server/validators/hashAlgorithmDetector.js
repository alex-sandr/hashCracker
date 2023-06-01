const HashIdentifier = require('hash-identifier');

const detectHashAlgorithm = (hash) => {
  const hashIdentifier = new HashIdentifier();
  const algorithm = hashIdentifier.identify(hash);
  return algorithm;
};

module.exports = detectHashAlgorithm;
