import axios from 'axios'
// const baseUrl = 'http://vue.wclimb.site/vi/'
const baseUrl = '/videos/api/'
export const initHome = () => {
  return axios.get(`${baseUrl}list/all`)
    .then((res) => {
      return res.data
    })
}

export const getTvs = () => {
  return axios.get(`${baseUrl}list/tvplay`)
    .then((res) => {
      return res.data
    })
}

export const getFilms = () => {
  return axios.get(`${baseUrl}list/film`)
    .then((res) => {
      return res.data
    })
}

export const getVariety = () => {
  return axios.get(`${baseUrl}list/variety`)
    .then((res) => {
      return res.data
    })
}

export const getVideos = (type, page) => {
  return axios.get(`${baseUrl}list?type=${type}&page=${page}`)
    .then((res) => {
      return res.data
    })
}
