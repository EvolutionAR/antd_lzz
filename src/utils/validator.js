/* 自定义校验规则 */
var checkPhoneNum = (rule, value, callback) => {
  // 校验手机号座机号
  var reg = /^((0\d{2,3}\d{7,8})|(1\d{10}))$/
  // var reg = /^[1][3,4,5,7,8][0-9]{9}$/
  // var regNum = /^\d+$|^\d+[.]?\d+$/
  if (value.indexOf('*') !== -1) {
    callback()
  } else if (!reg.test(value)) {
    callback(new Error('手机号格式不正确'))
  } else {
    callback()
  }
}
// else if (!regNum.test(value)) {
//   callback(new Error('手机号必须是数字'))
// }
var checkEmail = (rule, value, callback) => {
  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (value === '') {
    callback()
  } else if (value.indexOf('*') !== -1) {
    callback()
  } else if (!reg.test(value)) {
    callback(new Error('邮箱格式不正确'))
  } else {
    callback()
  }
}
export { checkPhoneNum, checkEmail }
