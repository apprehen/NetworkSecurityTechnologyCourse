const { generateKey } = require('./rsa')
const { rsaEncrypt, rsaDecrypt } = require('./crypt')
// 导出
module.exports = {
  generateKey,
  rsaEncrypt,
  rsaDecrypt
}