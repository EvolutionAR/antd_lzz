import Vue from 'vue'
Vue.filter('operateStatus', function (state) {
  switch (state) {
    case 1:
      return '新建'
    case 2:
      return '未审核'
    case 3:
      return '审核未通过'
    case 4:
      return '审核通过'
    case 5:
      return '已失效'
    default:
      return ''
  }
})
Vue.filter('expertDisposeStatus', function (state) {
  switch (state) {
    case '0':
      return '未提交'
    case '1':
      return '已提交'
    case '2':
      return '已结束'
    default:
      return ''
  }
})
Vue.filter('orgType', function (state) {
  switch (state) {
    case 'Hospital':
      return '定点医院'
    case 'DrugStore':
      return '定点药店'
    case 'Expert':
      return '专家'
    case 'HandlingInstitution':
      return '经办机构'
    case 'PharmaceuticalCompanies':
      return '医药企业'
    case 'InsuranceBureau':
      return '医保分局'
    default:
      return ''
  }
})
Vue.filter('protocolStatus', function (state) {
  switch (state) {
    case 0:
      return '失效'
    case 1:
      return '有效'
    default:
      return '无'
  }
})
Vue.filter('insuredIndicator', function (state) {
  switch (state) {
    case true:
      return '有'
    case false:
      return '无'
    default:
      return ''
  }
})
Vue.filter('hospitalBasicobjectClass', function (state) {
  switch (state) {
    case '1':
      return '定点医院'
    case '2':
      return '定点药店'
    case '3':
      return '医师'
    case '4':
      return '护士'
    case '5':
      return '药师'
    default:
      return ''
  }
})
Vue.filter('chainIndicator', function (state) {
  switch (state) {
    case true:
      return '是'
    case false:
      return '否'
    default:
      return ''
  }
})
Vue.filter('profitIndicator', function (state) {
  switch (state) {
    case true:
      return '盈利性'
    case false:
      return '非盈利性'
    default:
      return ''
  }
})
Vue.filter('protocolStatus', function (state) {
  switch (state) {
    case 0:
      return '失效'
    case 1:
      return '有效'
    default:
      return ''
  }
})
Vue.filter('PROGRAMME_VAILD', function (state) {
  switch (state) {
    case false:
      return '未选用'
    case true:
      return '已选用'
    default:
      return '未选用'
  }
})
Vue.filter('subTime', function (time) {
  if (time) {
    return time.substring(0, 10)
  }
  return '-'
})
Vue.filter('handleEventStatus', function (obj) {
  let status = obj.creditEventInfo.status
  switch (status) {
    case '经办':
    case '审核':
    case '审批':
    case '调查中':
      return ''
    default:
      return obj.eventResult
  }
})
Vue.filter('acceptIndicator', function (state) {
  switch (state) {
    case '0':
      return '未接受'
    case '1':
      return '已接受'
    case '2':
      return '申诉超时'
    default:
      return ''
  }
})
Vue.filter('hasDot', function (num) {
  if (num) {
    return (num + '').indexOf('.') !== -1 ? num.toFixed(2) : num
  } else {
    return ''
  }
})
Vue.filter('repairStatus', function (state) {
  switch (state) {
    case '1':
      return '待处理'
    case '2':
      return '初审中'
    case '3':
      return '初审通过'
    case '4':
      return '初审驳回'
    case '5':
      return '认定中'
    case '6':
      return '修复通过'
    case '7':
      return '修复驳回'
    default:
      return ''
  }
})
Vue.filter('listTypeDic', function (state) {
  switch (state) {
    case '2':
      return '红名单'
    case '3':
      return '黑名单'
    case '4':
      return '灰名单'
    default:
      return ''
  }
})

Vue.filter('appliedRangeDic', function (state) {
  switch (state) {
    case '0':
      return '信用事件'
    case '1':
      return '信用评价'
    case '2':
      return '手工新建'
    default:
      return ''
  }
})
Vue.filter('ruleStatus', function (state) {
  switch (state) {
    case true:
      return '启用'
    case false:
      return '禁用'
    default:
      return ''
  }
})
Vue.filter('reportStatus', function (state) {
  switch (state) {
    case '0':
      return '已结束'
    case '1':
      return '待填报'
    case '2':
      return '填报中'
    default:
      return ''
  }
})
// 渠道来源
Vue.filter('sourseStatus', function (state) {
  console.log(state)
  switch (state) {
    case '1':
      return '短信'
    case '2':
      return '公众号'
    case '3':
      return '线下导入'
    default:
      return ''
  }
})
Vue.filter('appealStatus', function (state) {
  switch (state) {
    case 0:
      return '未申诉'
    case 1:
      return '待审核'
    case 2:
      return '通过'
    case 3:
      return '驳回'
    default:
      return ''
  }
})
