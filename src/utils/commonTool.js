import {JSEncrypt} from "jsencrypt"
// 使用公钥加密
const fnencrypt = function (password, publicKey) {
  var encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey)
  var resPassWord = encryptor.encrypt(password)
  return resPassWord
}
// 深拷贝
const deepCopy = function (arr) {
  // 无法处理 原型，构造函数，Date ,Regexp ,Math
  let obj = Array.isArray(arr) ? [] : {}
  for (let item in arr) {
    if (arr.hasOwnProperty(item)) {
      if (typeof arr[item] === 'object' && arr[item] !== null) {
        obj[item] = deepCopy(arr[item])
      } else {
        obj[item] = arr[item]
      }
    }
  }
  return obj
}
export {
  fnencrypt,
  deepCopy,
}
