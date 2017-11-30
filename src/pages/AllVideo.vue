<template>
  <video-page :datas="videoData.length ? videoData : []" :title="title" />
</template>

<script>
  import videoPage from '../components/VideoPage.vue'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        title: '全部',
        activeIndex: 3
      }
    },
    computed: {
      ...mapState(['videoData'])
    },
    components: {
      'video-page': videoPage
    }
    // watch: {
    //   '$route.path' (val) {
    //     switch (val) {
    //       case '/allVideos':
    //         this.title = '全部'
    //         this.activeIndex = 3
    //         break
    //       case '/film':
    //         this.title = '电影'
    //         this.activeIndex = 0
    //         break
    //       case '/tvPlay':
    //         this.title = '电视剧'
    //         this.activeIndex = 1
    //         break
    //       case '/varietyShow':
    //         this.title = '综艺'
    //         this.activeIndex = 2
    //         break
    //       default:
    //         this.title = '全部'
    //         this.activeIndex = 3
    //         break
    //     }
    //   }
    // }
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