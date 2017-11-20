import axios from 'axios'

const baseUrl = 'http://vue.wclimb.site/vi/'
export const initHome = () => {
  return axios.get(`${baseUrl}list`)
    .then((res) => {
      return res.data
    })
}
