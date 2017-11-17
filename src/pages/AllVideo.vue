<template>
  <el-row type="flex" class="row-bg">
    <viedo-item
      v-for="(item, index) in videos"
      :key="index"
      :fileName="item.name"
      :score="item.score"
    />
  </el-row>
</template>

<script>
  import videoItem from '../components/VideoItem.vue'
  export default {
    data () {
      return {
        videos: [{
          id: 1,
          name: '战狼',
          score: 15
        }, {
          id: 2,
          name: '战狼1',
          score: 9
        }, {
          id: 3,
          name: '战狼2',
          score: 9
        }, {
          id: 4,
          name: '战狼3',
          score: 9
        }, {
          id: 5,
          name: '战狼4',
          score: 9
        }, {
          id: 6,
          name: '战狼5',
          score: 9
        }]
      }
    },
    components: {
      'viedo-item': videoItem
    }
  }
</script>

<style lang="scss">
  .el-row {
    margin-bottom: 20px;
    width: 75%;
    margin: 0 auto;
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
    background-color: red;
  }
</style>