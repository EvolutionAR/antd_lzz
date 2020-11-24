export const UNIT_CATEGORY = [
  {
    label: '无',
    value: ''
  },
  {
    label: '医院',
    value: '医院'
  },
  {
    label: '卫生院',
    value: '卫生院'
  },
  {
    label: '门诊部',
    value: '门诊部'
  },
  {
    label: '诊所',
    value: '诊所'
  },
  {
    label: '专科病防治机构',
    value: '专科病防治机构'
  },
  {
    label: '社区卫生服务中心',
    value: '社区卫生服务中心'
  }
]
export const INSURED_INDICATOR = [
  {
    label: '有',
    value: true
  },
  {
    label: '无',
    value: false
  }
]
export const PROFIT_INDICATOR = [
  {
    label: '盈利性',
    value: true
  },
  {
    label: '非盈利性',
    value: false
  }
]
export const REDBLACK_PROTOCOLSTATUS = [
  {
    label: '有效',
    value: '1'
  },
  {
    label: '失效',
    value: '0'
  }
]

export const chainIndicator = [
  {
    label: '是',
    value: true
  },
  {
    label: '否',
    value: false
  }
]

export const unitName = [
  {
    label: '定点药店',
    value: '定点药店'
  },
  {
    label: '定点医院',
    value: '定点医院'
  }
]
export const dictEventStatuses = [
  {
    value: '2',
    label: '处理中'
  },
  {
    value: '3',
    label: '申诉结束'
  }
]
export const rulingstatus = [
  {
    label: '撤销',
    value: '4'
  },
  {
    label: '结案',
    value: '5'
  },
  {
    label: '作废',
    value: '6'
  }
]
export const rulingstatusAll = [
  {
    label: '处理中',
    value: '2'
  },
  {
    label: '撤销',
    value: '4'
  },
  {
    label: '结案',
    value: '5'
  },
  {
    label: '作废',
    value: '6'
  }
]
export const eventResult = [
  {
    label: '严重',
    value: '严重'
  },
  {
    label: '一般',
    value: '一般'
  }
]
export const peopletype = [
  {
    label: '医师',
    value: '3'
  },
  {
    label: '护士',
    value: '4'
  },
  {
    label: '药师',
    value: '5'
  }
]
export const DICT_STATUS = [
  {
    label: '未处理',
    value: '未处理'
  },
  {
    label: '经办',
    value: '经办'
  },
  {
    label: '审核',
    value: '审核'
  },
  {
    label: '审批',
    value: '审批'
  },
  {
    label: '归档',
    value: '归档'
  },
  {
    label: '撤销',
    value: '撤销'
  },
  {
    label: '调查中',
    value: '调查中'
  },
  {
    label: '结案',
    value: '结案'
  }
]
export const regRules = {
  username: /^[a-z0-9A-Z_]*$/,
  strNum: /[a-z0-9A-Z_]$/,
  password: /[^\u4e00-\u9fa5]$/,
  password2: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*~`,.//_/|\\:;"'?<>\{\}\[\]\(\)\-+=！￥……（）——、【】；：“”‘’《》，。？·])[0-9a-zA-Z!@#$%^&*~`,.//_/|\\:;"'?<>\{\}\[\]\(\)\-+=！￥……（）——、【】；：“”‘’《》，。？·]{8,16}$/, // 必须大小字母和数字和特许符号
  phone: /^((0\d{2,3}\d{7,8})|(1\d{10}))$/,
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  idNo: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  integral: /^\d+$/, // 非负整数
  price: '/^([0-9]+|[0-9]{1,3}(,[0-9]{3})+)(.[0-9]{1,2})?$/', // 钱!!!!!!!!!!
  strNumdian: /^[a-z0-9A-Z.]*$/,
  zhengshu: /^-?\d+$/
}
export const Validator = {
  username: function (rule, value, callback) {
    let usernameRegexp = new RegExp(regRules['username'])
    if (!usernameRegexp.test(value)) {
      callback(new Error('只能输入数字字母或者_'))
    } else {
      callback()
    }
  },
  zhengshu: function (rule, value, callback) {
    let usernameRegexp = new RegExp(regRules['zhengshu'])
    if (!usernameRegexp.test(value)) {
      callback(new Error('只能输入整数'))
    } else {
      callback()
    }
  },
  strNum: function (rule, value, callback) {
    let usernameRegexp = new RegExp(regRules['strNum'])
    if (!usernameRegexp.test(value)) {
      callback(new Error('只能输入数字字母'))
    } else {
      callback()
    }
  },
  strNumdian: function (rule, value, callback) {
    let usernameRegexp = new RegExp(regRules['strNumdian'])
    if (!usernameRegexp.test(value)) {
      callback(new Error('只能输入数字字母小数点'))
    } else {
      callback()
    }
  },
  password: function (rule, value, callback) {
    let usernameRegexp = new RegExp(regRules['password'])
    if (!usernameRegexp.test(value)) {
      callback(new Error('不能输入汉字'))
    } else {
      callback()
    }
  },
  password2: function (rule, value, callback) {
    let usernameRegexp = new RegExp(regRules['password2'])
    if (!usernameRegexp.test(value)) {
      callback(new Error('长度8~16位，包含数字+大小写字母+特殊符号'))
    } else {
      callback()
    }
  },
  phone: function (rule, value, callback) {
    let MobileRegexp = new RegExp(regRules['phone'])
    if (value.indexOf('*') !== -1) {
      callback()
    } else if (!MobileRegexp.test(value)) {
      callback(new Error('手机号码格式不正确！'))
    } else {
      callback()
    }
  },
  email: function (rule, value, callback) {
    let EmailRegexp = new RegExp(regRules['email'])
    if (value === '') {
      callback()
    } else if (value.indexOf('*') !== -1) {
      callback()
    } else if (!EmailRegexp.test(value)) {
      callback(new Error('邮箱格式不正确'))
    } else {
      callback()
    }
  },
  idNo: function (rule, value, callback) {
    let idNoRegexp = new RegExp(regRules['idNo'])
    if (!value) {
      value = ''
    }
    if (value.indexOf('*') !== -1) {
      callback()
    } else if (!idNoRegexp.test(value)) {
      callback(new Error('身份证号格式不正确！'))
    } else {
      callback()
    }
  },
  // 人数 ，一般为正整数
  naturalNumber: function (rule, value, callback) {
    let numRegexp = new RegExp(regRules['integral'])
    console.log(value)
    if (!numRegexp.test(value) || parseFloat(value) <= 0) {
      callback(new Error('请输入正确的数字！'))
    } else {
      callback()
    }
  },
  // 信用评价计算值(选名) 正整数 数字
  computeValue_r: function (rule, value, callback) {
    var reg = /^[1-9]\d*$/
    var valueStr = value.toString()
    if (!valueStr) {
      return callback()
    } else if (!reg.test(valueStr)) {
      return callback(new Error('只能输入正整数'))
    } else {
      return callback()
    }
  },
  // 信用评价计算值(选%)
  computeValue_per: function (rule, value, callback) {
    var reg = /^(-?\d+)(\.\d+)?$/
    var valueStr = value.toString()
    if (!valueStr) {
      return callback()
    } else if (!reg.test(valueStr)) {
      return callback(new Error('请输入正确格式数字'))
    } else if (value > 100 || value < 1) {
      return callback(new Error('数值范围在1-100之间'))
    } else {
      return callback()
    }
  },
  // 医务人员信用积分
  computeValue_score: function (rule, value, callback) {
    var reg = /^(-?\d+)(\.\d+)?$/
    var valueStr = value.toString()
    if (!valueStr) {
      return callback()
    } else if (!reg.test(valueStr)) {
      return callback(new Error('请输入正确格式数字'))
    } else if (!valueStr.includes('.') && valueStr.length > 3) {
      return callback(new Error('最多输入三位整数'))
    } else if (valueStr.includes('.')) {
      let numArr = valueStr.split('.')
      if (numArr[0].length > 3) {
        return callback(new Error('小数点前最多3位'))
      } else if (numArr[1].length > 2) {
        return callback(new Error('小数点后最多2位'))
      } else {
        return callback()
      }
    } else {
      return callback()
    }
  },
  // 信用积分填写值
  creditPoints: function (rule, value, callback) {
    var reg = /^(-?\d+)(\.\d+)?$/
    var valueStr = value.toString()
    if (!valueStr) {
      return callback()
    } else if (!reg.test(valueStr)) {
      return callback(new Error('请输入正确格式数字'))
    } else if (!valueStr.includes('.') && valueStr.length > 10) {
      return callback(new Error('最多输入十位整数'))
    } else if (valueStr.includes('.')) {
      let numArr = valueStr.split('.')
      if (numArr[0].length > 10) {
        return callback(new Error('小数点前最多10位'))
      } else if (numArr[1].length > 2) {
        return callback(new Error('小数点后最多2位'))
      } else {
        return callback()
      }
    } else {
      return callback()
    }
  },
  // 企业银行卡号
  bankAccount: function (rule, value, callback) {
    var reg = /^[a-z0-9A-Z]*$/
    if (!value) {
      return callback()
    }
    var valueStr = value.toString()
    if (!reg.test(valueStr)) {
      return callback(new Error('只能输入数字字母'))
    } else {
      return callback()
    }
  }
}
export const excelUrl =
  'http://10.130.226.56:8056/evaluation/getEvaluationIndexExcel?objectClass='
