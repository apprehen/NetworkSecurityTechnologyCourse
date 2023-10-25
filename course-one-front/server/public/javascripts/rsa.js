/**
 * rsa 加密解密算法过程
 * 密文 = 明文^E mod N
 * 公钥 = (E, N)
 * 明文 = 密文^D mod N
 * 私钥 = (D, N)
 * 密钥对 = (E, D, N)
 * 步骤
 *  1. 求N -- p, q (随机生成两个质数)
 *  2. 求φ(n) (中间过程的中间数) -- (p - 1) * (q - 1)
 *  3. 求E -- 1 < E < φ(n) 且 E 和 φ(n) 互质 gcd(E, φ(n)) = 1
 *  4. 求D -- D * E mod φ(n) = 1
 * */
const BigNumber = require('big-number') 
/**
 * @param {number} num
 * @return {boolean} true if p is prime
 * @description check if p is prime 判断一个数是否为质数
 * @author yueyun <2023/10/17>
*/
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

/**
 * @param {number} min 
 * @param {number} max
 * @return {number[]} [e, d, n]
 * @description 生成质数列表，从min到max，返回质数列表
 * @author yueyun <2023/10/17>
 * */ 
function getPrime(min, max) {
  const rst = [];
  for (let i = Math.max(2, min); i <= max; i++) {
    if (isPrime(i)) {
      rst.push(i);
    }
  }
  return rst;
}

/**
 * @return {number[]} [p,q]
 * @description 生成两个随机质数p,q，返回[p, q]数组
 * @author yueyun <2023/10/17>
 **/
function generatepq() {
  const primeList = getPrime(1, 200);
  const p = primeList[Math.floor(Math.random() * 1000) % primeList.length];
  const q = primeList[Math.floor(Math.random() * 1000) % primeList.length];
  // return p * q;
  return [p, q];
} 

/**
 * @param {number} p
 * @param {number} q
 * @return {number} n
 * @description 计算n = p * q  n 代表密钥的长度，n的二进制位数越多，密钥越长，安全性越高
 * */ 
function generateN(p, q) {
  return p * q
}


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * @description 求a和b的最大公约数 gcd
 **/
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b)
}

/**
 * @param {number} p
 * @param {number} q
 * @return {number} 
 * @description 计算n的欧拉函数φ(n)
 * */
function getPhi(p, q) {
  return (p - 1) * (q - 1);
}

/**
 * @param {number} phi
 * @return {number} e
 * @description 计算e，1 < e < φ(n) 且 e 和 φ(n) 互质 gcd(e, φ(n)) = 1
 **/
function getE(phi) {
  const primeList = []
  for (let i = 0; i < phi; i++) { 
    if(gcd(i, phi) === 1) {
      primeList.push(i)
    }
  }
  return primeList[Math.floor(Math.random() * 1000) % primeList.length];
}


/**
 *@param {number} e
 *@param {number} phi
 *@return {number} d
 **/
function getD(e, phi) {
  const xyObj = { x: null, y: null }
  extGcd(e, phi, xyObj);
  while (xyObj.x < 0) {
    xyObj.x += phi;
  }
  return xyObj.x;
}

/**
 * @param {number} a
 * @param {number} b
 * @param {object} xyObj
 * @return {number}
 * @description 扩展欧几里得算法
 * */
function extGcd(a, b, xyObj) {
  if (b === 0) {
    xyObj.x = 1;
    xyObj.y = 0;
    return a;
  }
  let rst = extGcd(b, a % b, xyObj);
  let x = xyObj.x;
  xyObj.x = xyObj.y;
  xyObj.y = x - Math.floor(a / b) * xyObj.y;
  return rst;
}

/***
 * @param {string} message
 * @return {number}
 * @description 将字符串转换为整数
 * 
 */

/**
 * @param {number} m
 * @param {number} e
 * @param {number} n
 * @return {string} c
 * @description 加密过程，c = m^e mod n
 * */ 
function encrypt(m, e, n) {
  return BigNumber(m).pow(e).mod(n);
}

/**
 * @param {number} c 明文
 * @param {number} d 私钥
 * @param {number} n 公钥
 * @return {number} m 密文
 * @description 解密过程，m = c^d mod n
 * */
function decrypt(c, d, n) {
  return BigNumber(c).pow(d).mod(n);
}

/**
 * @returns {object} key 密钥对
 * @description 生成密钥对
 * */ 
function generateKey() {
  const [p, q] = generatepq();
  const n = generateN(p, q);
  const phi = getPhi(p, q);
  const e = getE(phi);
  const d = getD(e, phi);
  // 改成bigInt
  const key = {
    publicKey: {
      e: BigInt(e),
      n: BigInt(n)
    },
    privateKey: {
      d: BigInt(d),
      n: BigInt(n)
    }
  }
  return key
}

// 导出
module.exports = {
  generateKey,
}