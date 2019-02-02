'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var encrypt = exports.encrypt = function encrypt(message, base64EncodedSecret) {
  var secretWordArray = CryptoJS.Base64.parse(base64EncodedSecret);
  var passphrase = secretWordArray.toString(utf8);

  var encryptedWords = CryptoJS.AES.encrypt(message, passphrase);
  var cipherText = encryptedWords.toString();

  var words = CryptoJS.Utf8.parse(cipherText);
  var encodedCipherText = CryptoJS.Base64.stringify(words);

  return encodedCipherText;
};

var decrypt = exports.decrypt = function decrypt(base64EncodedAndEncryptedMessage, base64EncodedSecret) {
  var secretWordArray = CryptoJS.Base64.parse(base64EncodedSecret);
  var passphrase = secretWordArray.toString(utf8);

  var words = CryptoJS.Base64.parse(base64EncodedAndEncryptedMessage);
  var encryptedMessage = CryptoJS.Utf8.stringify(words);

  var bytes = CryptoJS.AES.decrypt(encryptedMessage, passphrase);
  var plainText = bytes.toString(utf8);

  return plainText;
};

var generatePassphrase = exports.generatePassphrase = function generatePassphrase() {
  var passphase = Array(16).fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz').map(function (x) {
    return x[Math.floor(Math.random() * x.length)];
  }).join('');
  var words = CryptoJS.Utf8.parse(passphase);
  var encodedSecret = CryptoJS.Base64.stringify(words);
  return encodedSecret;
};