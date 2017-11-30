<template>
  <video-page :datas="tvplays.length ? tvplays : []" :title="title" />
</template>

<script>
  import videoPage from '../components/VideoPage.vue'
  import { mapState, mapMutations } from 'vuex'
  import * as types from '../store/mutation-type'
  import { getTvs } from '../data'
  export default {
    data () {
      return {
        title: '电视剧',
        activeIndex: 3
      }
    },
    computed: {
      ...mapState(['tvplays'])
    },
    components: {
      'video-page': videoPage
    },
    methods: {
      ...mapMutations([types.TV_PLAY_DATA])
    },
    created () {
      // 实例创建后初始化数据
      getTvs()
        .then((data) => {
          this[types.TV_PLAY_DATA](data)
          console.log(data)
          // this[types.INIT_VEDIO_DATA](data)
        })
    }
  }
</script>

<style lang="scss">