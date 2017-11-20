<template>
  <video-page :datas="datas" :title="title" />
</template>

<script>
  import videoPage from '../components/VideoPage.vue'
  import { mapState } from 'vuex'
  export default {
    data () {
      console.log('this.videoData', this.$store.state)
      console.log('videoData', this.$store.state.videoData)
      return {
        title: '全部',
        datas: this.$store.state.videoData[3]
      }
    },
    computed: {
      ...mapState(['videoData'])
    },
    components: {
      'video-page': videoPage
    },
    watch: {
      '$route.path' (val) {
        switch (val) {
          case '/allVideos':
            this.title = '全部'
            this.datas = this.videoData[3]
            break
          case '/film':
            this.title = '电影'
            this.datas = this.videoData[0]
            break
          case '/tvPlay':
            this.title = '电视剧'
            this.datas = this.videoData[1]
            break
          case '/varietyShow':
            this.title = '综艺'
            this.datas = this.videoData[2]
            break
          default:
            this.title = '全部'
            this.datas = this.videoData[3]
            break
        }
      }
    }
  }
</script>

<style lang="scss">
  .wrap {
    width: 75%;
    margin: 0 auto;
    .video-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eaeaea;
      margin-bottom: 20px;
      a {
        text-decoration: none;
      }
    }
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .el-row--flex {
    flex-wrap: wrap;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  
  .row-bg {
    padding: 10px 0;
  }
</style>