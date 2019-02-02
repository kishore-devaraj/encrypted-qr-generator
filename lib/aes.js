

const encrypt = (message, base64EncodedSecret) => {
  var secretWordArray = CryptoJS.enc.Base64.parse(base64EncodedSecret);
  var passphrase = secretWordArray.toString(CryptoJS.enc.Utf8);

  var encryptedWords = CryptoJS.AES.encrypt(message, passphrase);
  var cipherText = encryptedWords.toString();
  return cipherText;
};

const decrypt = (base64EncodedAndEncryptedMessage, base64EncodedSecret) => {
  let secretWordArray = CryptoJS.enc.Base64.parse(base64EncodedSecret);
  var passphrase = secretWordArray.toString(CryptoJS.enc.Utf8);


  var bytes = CryptoJS.AES.decrypt(base64EncodedAndEncryptedMessage, passphrase);
  var plainText = bytes.toString(CryptoJS.enc.Utf8);

  return plainText;
};

const generatePassphrase = () => {
  var passphase = Array(16)
    .fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    .map(function(x) {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join(''); 
  var words = CryptoJS.enc.Utf8.parse(passphase);
  var encodedSecret = CryptoJS.enc.Base64.stringify(words);
  return encodedSecret;
};


