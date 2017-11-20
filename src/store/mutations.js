import * as types from './mutation-type'

export default {
  [types.INIT_VEDIO_DATA] (state, data) {
    state.videoData = data
  }
}
