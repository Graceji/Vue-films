import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  videos: {
    len: 0,
    datas: []
  },
  tvplays: [],
  films: [],
  variety: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
