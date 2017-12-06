import axios from 'axios'
// const baseUrl = 'http://vue.wclimb.site/vi/'
const baseUrl = '/videos/api/'

const register = (username, pass) => {
  return axios.post(`${baseUrl}register`, {
    username,
    pass
  })
  .then(res => {
    return res.data
  })
}

const login = (username, pass) => {
  return axios.post(`${baseUrl}login`, {
    username,
    pass
  })
    .then(res => {
      return res.data
    })
}

// 根据类型获取videos数据
const getVideosByType = (type) => {
  return axios.get(`${baseUrl}list/${type}`)
    .then((res) => {
      return res.data
    })
}

// 根据页码获取数据
const getVideosByPage = (type, page) => {
  return axios.get(`${baseUrl}list/${type}/${page}`)
    .then((res) => {
      return res.data
    })
}

// 检查是否登录
const checkLogin = () => {
  return axios.get(`${baseUrl}isLogin`)
    .then(res => {
      return res.data
    })
}

// 注销
const signout = () => {
  return axios.get(`${baseUrl}signout`)
    .then(res => {
      return res.data
    })
}

export default {
  register,
  login,
  getVideosByType,
  getVideosByPage,
  checkLogin,
  signout
}
