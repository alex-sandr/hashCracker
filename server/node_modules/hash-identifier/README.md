# Hash Identifier

This project is a port of python project [hash-identifier](https://code.google.com/archive/p/hash-identifier/)

Identifies the algorithm used to generate the supplied hash

## Usage


```javascript
const HashIdentifier = require('hash-identifier');
````

### checkAlgorithm

```javascript
HashIdentifier.checkAlgorithm("ae11fd697ec92c7c98de3fac23aba525");

//output:
// [
//   'MD5',
//   'Domain Cached Credentials - MD4(MD4(($pass)).(strtolower($username)))',
//   'RAdmin v2.x',
//   'NTLM',
//   'MD4',
//   'MD2',
//   'Haval-128',
//   'RipeMD-128',
//   'SNEFRU-128',
//   'Tiger-128'
// ]
```
The output is sorted by the most relevant algorithms

### supportedAlgorithms

List all supported algorithms

```javascript
HashIdentifier.supportedAlgorithms()
```
## VSCode

You can use this script in VSCode with the [Swissknife](https://marketplace.visualstudio.com/items?itemName=luisfontes19.vscode-swissknife) extension
