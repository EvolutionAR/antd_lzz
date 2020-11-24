import axios from 'axios'
import { Message, Loading } from 'element-ui'
import Router from '@/router/index'
class NBAxios {
  constructor (baseUrl = '') {
    this._baseUrl = baseUrl
    // let token = ''
    // axios.defaults.headers.common['token'] = token
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'// 配置请求头
    axios.defaults.timeout = 120000
    axios.interceptors.request.use(
      config => {
        //  console.log(config, 'dasdasd')
        return config
      },
      err => {
        Message.error({ message: '请求超时!' + err })
      }
    )
    axios.interceptors.response.use(
      data => {
        if (data.data.code === '3') {
          Router.replace({ path: '/login' })
        } else if (data.data.code === '403') {
          // 用户没有访问该页面权限
          Router.replace({ path: '/unAuth' })
        }
        // if (data.config.url === '/api/eventComplain/uploadFile' && data.data.code !== '0') {
        //   Message.error({ message: data.data.desc })
        //   return data
        // }
        return data
      },
      err => {
        if (err.response.status) {
          Message.error({ message: '服务器被吃了⊙﹏⊙∥' })
        }
      }
    )
  }
  request (url, options) {
    return new Promise((resolve, reject) => {
      const defaultOptions = {
        url: `${url}`
      } // 默认的请求路径
      const newOptions = { ...options, ...defaultOptions }
      axios
        .request(newOptions)
        .then(res => resolve(res))
        .catch(error => console.log('ssss', error))
    })
  }
  get (url, params) {
    return new Promise((resolve, reject) => {
      this.request(url, {
        method: 'get',
        params: params
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  specialpost (url, body, params) {
    return new Promise((resolve, reject) => {
      this.request(url, {
        method: 'post',
        data: body, // post 请求body里面的参数
        params: params // post 请求url里面的参数
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  post (url, body) {
    return new Promise((resolve, reject) => {
      this.request(url, {
        method: 'post',
        data: body
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // 下载文件流统一接口
  DownFlow (url, body, params, methodType) {
    return new Promise((resolve, reject) => {
      this.request(url, {
        method: methodType,
        responseType: 'blob',
        data: body, // post 请求body里面的参数
        params: params // post get 请求url里面的参数
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
export default NBAxios
