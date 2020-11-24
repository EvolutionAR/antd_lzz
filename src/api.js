const axios = require('axios');
const  getCityName = (params) => {
    return axios.get('/max/login/getCityName',params)
}
const  singlePoetry = (params) => {
    return axios.get('/api/singlePoetry',params)
}
export {
    getCityName,
    singlePoetry
}