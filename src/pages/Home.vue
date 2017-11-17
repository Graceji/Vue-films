<template>
  <el-container>
    <el-header>
      <nav-header></nav-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <aside-content />
      </el-aside>
      <el-container>
        <el-main>
          <main-content></main-content>
        </el-main>
        <el-footer>欢迎来到Graceji的疯人电影院</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import navHeader from '../components/HomeHeader.vue'
  import MainContent from '../components/MainContent.vue'
  import Aside from '../components/Aside.vue'
  export default {
    data () {
      return {
      }
    },
    methods: {
    },
    components: {
      'nav-header': navHeader,
      'main-content': MainContent,
      'aside-content': Aside
    }
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
    .el-aside {
      background-color: rgb(250, 251, 252);
      color: #333;
      text-align: center;
      line-height: 200px;
    }
    .el-container {
      .el-footer {
        background-color: #000;
        opacity: 0.8;
        color: #fff;
        text-align: center;
        line-height: 60px;
      }
      .el-main {
        background-color: rgb(250, 251, 252);
        color: #333;
        text-align: center;
        line-height: 160px;
      }
    }
  }
}
</style>
