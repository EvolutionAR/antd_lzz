const axios = require('axios');
const  getCityName = (params) => {
    return axios.get('/max/login/getCityName',params)
}
const  getCode = (params) => {
    return axios.get('/max/login/getCode',params)
}
const  singlePoetry = (params) => {
    return axios.get('/api/singlePoetry',params)
}
const getLoginKey = (params) => {
    return axios.get(`/max/login/getLoginKey`, params).then(res => res.data)
  }
const login = (params) => {
    return axios.post(`/max/user/login`, params).then(res => res.data)
}
const findMenuByUserId = (params) => {
    return axios.get(`/max/menuInfo/findMenuByUserId`, params).then(res => res.data)
}
 
export {
    getCityName,
    singlePoetry,
    getCode,
    getLoginKey,
    login,
    findMenuByUserId
}