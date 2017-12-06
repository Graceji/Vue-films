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
    const { type } = payload
    await Api.getVideosByType(type)
      .then(res => {
        commit(types.VIDEOSDATA, res)
      })
  },
  async getVideosByPage ({ commit }, payload) {
    const { type, page } = payload
    await Api.getVideosByPage(type, page)
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
