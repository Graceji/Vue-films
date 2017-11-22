<template>
  <el-container>
    <el-header>
      <nav-header></nav-header>
    </el-header>
    <el-container>
      <div class="banner"></div>
    </el-container>
  </el-container>
</template>

<script>
  import HomeHeader from '../components/HomeHeader.vue'
  export default {
    data () {
      return {
        test: 1
      }
    },
    components: {
      'nav-header': HomeHeader
    },
    methods: {
      changeText () {
        console.log('jinlaoilema?')
        this.test = 3
      }
    },
    created () {}
  }
</script>

<style lang="scss">
.el-container {
  height: 100%;
  .el-header {
    background-color: #000;
    opacity: 0.8;
    display: flex;
    align-items: center;
  }
  .el-container {
    overflow-y: overflow;
    .banner {
      width: 100%;
      min-width: 1200px;
      background: #4ebf60;
      height: 376px;
    }
  }
}
</style>

