// 模幂运算
function modPow(base, exponent, modulus) {
  let result = 1n;
  base = base % modulus;
  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result = (result * base) % modulus;
    }
    base = (base * base) % modulus;
    exponent = exponent / 2n;
  }
  return result;
}

// 加密函数
function rsaEncrypt(message, publicKey) {
  const n = publicKey.n;
  const e = publicKey.e;
  const textEncoder = new TextEncoder();
  const messageBytes = textEncoder.encode(message);
  const encryptedMessage = [];

  for (let i = 0; i < messageBytes.length; i++) {
    const charCode = BigInt(messageBytes[i]);
    const encryptedChar = modPow(charCode, e, n);
    encryptedMessage.push(encryptedChar);
  }

  return encryptedMessage;
}

// 解密函数
function rsaDecrypt(encryptedMessage, privateKey) {
  const n = privateKey.n;
  const d = privateKey.d;
  const textDecoder = new TextDecoder();
  const decryptedMessageBytes = [];

  for (let i = 0; i < encryptedMessage.length; i++) {
    const encryptedChar = encryptedMessage[i];
    const charCode = Number(modPow(encryptedChar, d, n));
    decryptedMessageBytes.push(charCode);
  }

  const decryptedMessage = textDecoder.decode(new Uint8Array(decryptedMessageBytes));

  return decryptedMessage;
}

// 导出
module.exports = {
  rsaEncrypt,
  rsaDecrypt
}

// const publicKey = {
//   n: 2537n, // Modulus
//   e: 13n,   // Public exponent
// };

// const privateKey = {
//   n: 2537n, // Modulus
//   d: 937n,  // Private exponent
// };



// // 要加密的中文明文
// const plaintext = "Hello World";

// // 加密
// const encryptedMessage = rsaEncrypt(plaintext, publicKey);

// // 解密
// const decryptedMessage = rsaDecrypt(encryptedMessage, privateKey);

// console.log("加密后的密文:", encryptedMessage);
// console.log("解密后的明文:", decryptedMessage);
