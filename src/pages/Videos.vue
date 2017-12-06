<template>
  <video-page :datas="videos" :title="title" :total="total" :type="this.$route.params.type" v-on:getNextPage="getData" />
</template>

<script>
  import videoPage from '../components/VideoPage.vue'
  import { mapState, mapActions } from 'vuex'
  // import * as types from '../store/mutation-type'
  // import Api from '../data'
  export default {
    data () {
      return {
        title: '全部'
      }
    },
    computed: {
      ...mapState({
        videos: state => state.videos.videos,
        total: state => state.videos.totalLen
      })
    },
    components: {
      'video-page': videoPage
    },
    methods: {
      ...mapActions('videos', ['getVideosByType']),
      initData (type, page) {
        this.getVideosByType({
          page,
          type
        })
      },
      getData (type, page) {
        // Api.getVideos(type, page)
        //   .then(data => {
        //     this[types.INIT_VEDIO_DATA](data)
        //   })
      }
    },
    created () {
      this.initData(this.$route.params.type, this.$route.params.page || 1)
    },
    watch: {
      '$route' (val) {
        const page = this.$route.params.page
        switch (this.$route.params.type) {
          case 'all':
            this.title = '全部'
            this.initData('all', page)
            break
          case 'film':
            this.title = '电影'
            this.initData('film', page)
            break
          case 'tvplay':
            this.title = '电视剧'
            this.initData('tvplay', page)
            break
          case 'variety':
            this.title = '综艺'
            this.initData('variety', page)
            break
        }
      }
    }
    // beforeRouteEnter (to, from, next) {
    //   console.log('to', to)
    //   console.log('from', from)
    //   next()
    //   // 在渲染该组件的对应路由被 confirm 前调用
    //   // 不！能！获取组件实例 `this`
    //   // 因为当守卫执行前，组件实例还没被创建
    // }
  }
</script>

<style lang="scss">
</style>