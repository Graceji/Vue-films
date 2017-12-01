<template>
  <video-page :datas="videos" :title="title" v-on:getNextPage="getData" />
</template>

<script>
  import videoPage from '../components/VideoPage.vue'
  import { mapState, mapMutations } from 'vuex'
  import * as types from '../store/mutation-type'
  import { getVideos } from '../data'
  export default {
    data () {
      return {
        title: '全部'
      }
    },
    computed: {
      ...mapState(['videos'])
    },
    components: {
      'video-page': videoPage
    },
    methods: {
      ...mapMutations([types.INIT_VEDIO_DATA]),
      initData (type, page) {
        getVideos(type, page)
          .then(data => {
            this[types.INIT_VEDIO_DATA](data)
          })
      },
      getData (type, page) {
        getVideos(type, page)
          .then(data => {
            this[types.INIT_VEDIO_DATA](data)
          })
      }
    },
    created () {
      this.initData(this.$route.query.type || 'all', 1)
    },
    watch: {
      '$route.query' (val) {
        switch (val.type) {
          case 'all':
            this.title = '全部'
            this.initData('all', 1)
            break
          case 'film':
            this.title = '电影'
            this.initData('film', 1)
            break
          case 'tvplay':
            this.title = '电视剧'
            this.initData('tvplay', 1)
            break
          case 'variety':
            this.title = '综艺'
            this.initData('variety', 1)
            break
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('to', to)
      console.log('from', from)
      next()
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
    }
  }
</script>

<style lang="scss">
</style>