
// Based on python project hash-identifier https://code.google.com/archive/p/hash-identifier/issues

const ALPHA = /^[a-zA-Z]+$/;
const ALPHA_NUMERIC = /^[a-zA-Z0-9]+$/;
const NUMERIC = /^[0-9]+$/;

const isAlphaNum = (content) => content.match(ALPHA_NUMERIC) !== null;
const isAlpha = (content) => content.match(ALPHA) !== null;
const isNumber = (content) => content.match(NUMERIC) !== null;

const strictAlphaNumeric = (content) => {
  return content.match(ALPHA) === null && content.match(NUMERIC) === null && content.match(ALPHA_NUMERIC) !== null;
}


const data = [
  {
    order: 102020, name: "ADLER-32", example: '0607cb42', check: function (hash) {
      return strictAlphaNumeric(hash);
    }
  },
  {
    order: 102040, name: "CRC-32", example: 'b33fd057', check: function (hash) {
      return strictAlphaNumeric(hash)
    }
  },
  {
    order: 102060, name: "CRC-32B", example: 'b764a0d9', check: function (hash) {
      return strictAlphaNumeric(hash)
    }
  },
  {
    order: 101020, name: "CRC-16", example: '4607', check: function (hash) {
      return !isAlpha(hash) && isAlphaNum(hash);
    }
  },
  {
    order: 101040, name: "CRC-16-CCITT", example: '3d08', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 104020, name: "DES(Unix)", example: 'ZiY8YtDKXJwYQ', check: function (hash) {
      return isNumber(hash) === false && isAlpha(hash) === false;
    }
  },
  {
    order: 101060, name: "FCS-16", example: '0e5b', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 103040, name: "GHash-32-3", example: '80000000', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 103020, name: "GHash-32-5", example: '85318985', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 115060, name: "GOST R 34.11-94", example: 'ab709d384cce5fda0793becd3da0cb6a926c86a8f3460efb471adddee1c63793', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 109100, name: "Haval-160", example: 'a106e921284dd69dad06192a4411ec32fce83dbb', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 110040, name: "Haval-192", example: 'cd3a90a3bebd3fa6b6797eba5dab8441f16a7dfa96c6e641', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 114040, name: "Haval-224", example: 'f65d3c0ef6c56f4c74ea884815414c24dbf0195635b550f47eac651a', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 115040, name: "Haval-256", example: '7169ecae19a5cd729f6e9574228b8b3c91699175324e6222dec569d4281d4a4a', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 107080, name: "Lineage II C4", example: '0x49a57f66bd3d5ba6abda5579c264a0e4', check: function (hash) {
      return (strictAlphaNumeric(hash.substring(2))) && hash.startsWith("0x");
    }
  },
  {
    order: 106025, name: "Domain Cached Credentials - MD4(MD4(($pass)).(strtolower($username)))", example: 'f42005ec1afe77967cbc83dce1b4d714', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 102080, name: "XOR-32", example: '0000003f', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 105060, name: "MD5(Half)", example: 'ae11fd697ec92c7c', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 105040, name: "MD5(Middle)", example: '7ec92c7c98de3fac', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 105020, name: "MySQL", example: '63cea4673fd25f46', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 107040, name: "MD5(phpBB3)", example: '$H$9kyOtE8CDqMJ44yfn9PFz2E.L2oVzL1', check: function (hash) {
      return hash.startsWith("$H$")
    }
  },
  {
    order: 107060, name: "MD5(Unix)", example: '$1$cTuJH0Ju$1J8rI.mJReeMvpKUZbSlY/', check: function (hash) {
      return hash.startsWith("$1$");
    }
  },
  {
    order: 107020, name: "MD5(Wordpress)", example: '$P$BiTOhOj3ukMgCci2juN0HRbCdDRqeh.', check: function (hash) {
      return hash.startsWith("$P$");
    }
  },
  {
    order: 108020, name: "MD5(APR)", example: '$apr1$qAUKoKlG$3LuCncByN76eLxZAh/Ldr1', check: function (hash) {
      return hash.startsWith("$apr");
    }
  },
  {
    order: 106160, name: "Haval-128", example: 'd6e3ec49aa0f138a619f27609022df10', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 106060, name: "MD2", example: '08bbef4754d98806c373f2cd7d9a43c4', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 106040, name: "MD4", example: 'a2acde400e61410e79dacbdfc3413151', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 106020, name: "MD5", example: 'ae11fd697ec92c7c98de3fac23aba525', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 106020, name: "MD5passsaltjoomla2", example: 'fb33e01e4f8787dc8beb93dac4107209:fxJUXVjYRafVauT77Cze8XwFrWaeAYB2', check: function (hash) {
      const tmp = hash.split(":");
      const ex = this.example.split(":");

      return tmp.length === 2
        && tmp[0].length === ex[0].length && tmp[1].length === ex[1].length
        && strictAlphaNumeric(tmp[0]) && strictAlphaNumeric(tmp[1]);
    }
  },


  {
    order: 106029, name: "NTLM", example: 'cc348bace876ea440a28ddaeb9fd3550', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 106027, name: "RAdmin v2.x", example: 'baea31c728cbf0cd548476aa687add4b', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 106180, name: "RipeMD-128", example: '4985351cd74aff0abc5a75a0c8a54115', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 106200, name: "SNEFRU-128", example: '4fb58702b617ac4f7ca87ec77b93da8a', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 106220, name: "Tiger-128", example: 'c086184486ec6388ff81ec9f23528727', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 109040, name: "MySQL5 - SHA-1(SHA-1($pass))", example: '9bb2fb57063821c762cc009f7584ddae9da431ff', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 109060, name: "MySQL 160bit - SHA-1(SHA-1($pass))", example: '*2470c0c06dee42fd1618bb99005adca2ec9d1e19', check: function (hash) {
      return strictAlphaNumeric(hash.substring(1)) && hash.startsWith("*");
    }
  },
  {
    order: 109120, name: "RipeMD-160", example: 'dc65552812c66997ea7320ddfb51f5625d74721b', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 109020, name: "SHA-1", example: '4a1d4dbc1e193ec3ab2e9213876ceb8f4db72333', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 109080, name: "Tiger-160", example: 'c086184486ec6388ff81ec9f235287270429b225', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 110020, name: "Tiger-192", example: 'c086184486ec6388ff81ec9f235287270429b2253b248a70', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 113020, name: "SHA-1(Django)", example: 'sha1$Zion3R$299c3d65a0dcab1fc38421783d64d0ecf4113448', check: function (hash) {
      return hash.match(/^sha1\$\w{6}\$/) != null && strictAlphaNumeric(hash.substring(12))

    }
  },
  {
    order: 114020, name: "SHA-224", example: 'e301f414993d5ec2bd1d780688d37fe41512f8b57f6923d054ef8e59', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 115080, name: "RipeMD-256", example: '5fcbe06df20ce8ee16e92542e591bdea706fbdc2442aecbf42c223f4461a12af', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 115100, name: "SNEFRU-256", example: '3a654de48e8d6b669258b2d33fe6fb179356083eed6ff67e27c5ebfa4d9732bb', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 115020, name: "SHA-256", example: '2c740d20dab7f14ec30510a11f8fd78b82bc3a711abe8a993acdb323e78e6d5e', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 116040, name: "SAM - (LM_hash:NT_hash)", example: '4318B176C3D8E3DEAAD3B435B51404EE:B7C899154197E8A2A33121D76A240AB5', check: function (hash) {
      const tmp = hash.split(":");
      const ex = this.example.split(":");

      return tmp.length === 2
        && tmp[0].length === ex[0].length && tmp[1].length === ex[1].length
        && strictAlphaNumeric(tmp[0]) && strictAlphaNumeric(tmp[1]);

    }
  },
  {
    order: 117020, name: "SHA-256(Django)", example: 'sha256$Zion3R$9e1a08aa28a22dfff722fad7517bae68a55444bb5e2f909d340767cec9acf2c3', check: function (hash) {
      return hash.match(/^sha256\$\w{6}\$/i) != null && strictAlphaNumeric(hash.substring(14));
    }
  },
  {
    order: 118020, name: "RipeMD-320", example: 'b4f7c8993a389eac4f421b9b3b2bfb3a241d05949324a8dab1286069a18de69aaf5ecc3c2009d8ef', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 119020, name: "SHA-384", example: '3b21c44f8d830fa55ee9328a7713c6aad548fe6d7a4a438723a0da67c48c485220081a2fbc3e8c17fd9bd65f8d4b4e6b', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 120020, name: "SHA-256", example: '2c740d20dab7f14ec30510a11f8fd78b82bc3a711abe8a993acdb323e78e6d5e', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 121020, name: "SHA-384(Django)", example: 'sha384$Zion3R$88cfd5bc332a4af9f09aa33a1593f24eddc01de00b84395765193c3887f4deac46dc723ac14ddeb4d3a9b958816b7bba', check: function (hash) {
      return hash.match(/^sha384\$\w{6}\$/) !== null && strictAlphaNumeric(hash.substring(12))
    }
  },
  {
    order: 122020, name: "SHA-512", example: 'ea8e6f0935b34e2e6573b89c0856c81b831ef2cadfdee9f44eb9aa0955155ba5e8dd97f85c73f030666846773c91404fb0e12fb38936c56f8cf38a33ac89a24e', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 122040, name: "Whirlpool", example: '76df96157e632410998ad7f823d82930f79a96578acc8ac5ce1bfc34346cf64b4610aefa8a549da3f0c1da36dad314927cebf8ca6f3fcd0649d363c5a370dddb', check: function (hash) {
      return (strictAlphaNumeric(hash));
    }
  },
  {
    order: 123000, name: "BCrypt", example: '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', check: function (hash) {
      return hash.match(/^\$2[aby]?\$\d{2}\$[.\/A-Za-z0-9]{53}$/) != null
    }
  }
]


const checkAlgorithm = (hash) => {
  const results = data.filter(alg => (hash.length === alg.example.length && alg.check(hash)));

  return results.sort((a, b) => a.order - b.order).map(r => r.name);
}

const supportedAlgorithms = () => data.map(d => d.name);
module.exports = { checkAlgorithm, supportedAlgorithms };