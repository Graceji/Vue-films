<template>
  <div class="wrap">
    <div class="video-header">
      <span>{{title}}({{datas.length}})</span>
      <router-link to="">更多»</router-link>
    </div>
    <el-row type="flex" class="row-bg">
      <viedo-item v-for="(item, index) in datas" :key="index" :item="item" v-if="index < 10" />
    </el-row>
  </div>
</template>

<script>
  import videoItem from './VideoItem.vue'
  export default {
    data () {
      return {
      }
    },
    props: {
      datas: Array,
      title: String
    },
    // computed: {
    // },
    components: {
      'viedo-item': videoItem
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