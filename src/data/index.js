import axios from 'axios'
// const baseUrl = 'http://vue.wclimb.site/vi/'
const baseUrl = '/videos/api/'

export const register = (username, pass) => {
  return axios.post(`${baseUrl}register`, {
    username,
    pass
  })
  .then(res => {
    return res.data
  })
}

export const login = (username, pass) => {
  return axios.post(`${baseUrl}login`, {
    username,
    pass
  })
    .then(res => {
      return res.data
    })
}

export const getVideos = (type, page) => {
  return axios.get(`${baseUrl}list?type=${type}&page=${page}`)
    .then((res) => {
      return res.data
    })
}

// 检查是否登录
export const checkLogin = () => {
  return axios.get(`${baseUrl}isLogin`)
    .then(res => {
      return res.data
    })
}

// 注销
export const signout = () => {
  return axios.get(`${baseUrl}signout`)
    .then(res => {
      return res.data
    })
}
