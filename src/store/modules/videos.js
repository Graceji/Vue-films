import * as types from '../mutation-type'
import Api from '../../data'

const state = {
  totalLen: 0,
  videos: []
}

const mutations = {
  [types.VIDEOSDATA] (state, payload) {
    state.videos = payload.datas
    state.totalLen = payload.total
  }
}

const actions = {
  async getVideosByType ({ commit }, payload) {
    console.log(payload)
    const { type, page } = payload
    console.log('type', type)
    console.log('page', page)
    await Api.getVideos(type, page)
      .then(res => {
        commit(types.VIDEOSDATA, res)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
