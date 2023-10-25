var express = require('express');
var router = express.Router();
const { generateKey,rsaEncrypt,rsaDecrypt } = require('../public/javascripts')
const { Buffer } = require('buffer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/generateKey', function (req, res) { 
  const key = generateKey()
  // 将key中的BigInt转换为String
  key.publicKey.e = key.publicKey.e.toString()
  key.publicKey.n = key.publicKey.n.toString()
  key.privateKey.d = key.privateKey.d.toString()
  key.privateKey.n = key.privateKey.n.toString()
  // res.json(key)
  if (key) {
    res.send({
      code: 200,
      data: key,
      message: 'success'
    })
  } else {
    res.send({
      code: 400,
      data: null,
      message: 'error'
    })
  }
})

router.post('/encrypt', async (req, res) => {
  // 获取参数
  let { message, publicKey } = req.body
  // 实现加密
  publicKey = {
    e: BigInt(publicKey.e),
    n: BigInt(publicKey.n)
  }
  const encryptMessage = rsaEncrypt(message, publicKey)
  console.log(encryptMessage)
  // 将加密后的密文拼接成字符串返回
  // 转化为字母string
  res.send({
    code: 200,
    data: encryptMessage.join('/'),
    message: 'success'
  })
})

router.post('/decrypt', (req, res) => { 
  let { encryptMessage, privateKey } = req.body
  // 实现解密
  encryptMessage = encryptMessage.split('/').map(item => BigInt(item))
  privateKey = {
    d: BigInt(privateKey.d),
    n: BigInt(privateKey.n)
  }
  console.log(encryptMessage,privateKey)
  let decryptedMessage = rsaDecrypt(encryptMessage, privateKey)
  privateKey = {
    d: BigInt(privateKey.d),
    n: BigInt(privateKey.n)
  }
  if (decryptedMessage) {
    res.send({
      code: 200,
      data: decryptedMessage,
      message: 'success'
    })
  } else {
    res.send({
      code: 400,
      data: null,
      message: 'error'
    })
  }
})


module.exports = router;
