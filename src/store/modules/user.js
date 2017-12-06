import Api from '../../data'
import * as types from '../mutation-type'
const state = {
  isLogin: false,
  userName: ''
}

const actions = {
  // async login ({ commit }, payload) {
  //   const data = await Api.login(payload)
  //   commit(types.LOGINSTATUS, data)
  // },
  async checkLogin ({ commit }) {
    const data = await Api.checkLogin()
    if (data.isLogin) {
      commit(types.SETLOGINSTATUS, {
        isLogin: data.isLogin,
        userName: data.userName
      })
    }
  }
}

const mutations = {
  [types.SETLOGINSTATUS] (state, payload) {
    state.userName = payload.userName
    state.isLogin = payload.isLogin
  },
  [types.SETUSERNAME] (state, payload) {
    state.userName = payload.userName
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
