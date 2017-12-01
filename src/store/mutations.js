import * as types from './mutation-type'

export default {
  [types.INIT_VEDIO_DATA] (state, data) {
    state.videos.len = data.total
    state.videos.datas = data.datas
  },
  [types.TV_PLAY_DATA] (state, data) {
    state.tvplays = data
  },
  [types.FILM_DATA] (state, data) {
    state.films = data
  },
  [types.VARIETY_DATA] (state, data) {
    state.variety = data
  }
}
