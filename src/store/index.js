import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import mutations from './mutations'
import user from './modules/user'
import videos from './modules/videos'

Vue.use(Vuex)

// const state = {
//   videos: {
//     len: 0,
//     datas: []
//   },
//   tvplays: [],
//   films: [],
//   variety: []
// }

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    user,
    videos
  }
})
