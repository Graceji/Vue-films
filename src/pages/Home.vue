<template>
  <el-container>
    <el-header>
      <div class="logo">
        <i class="el-icon-star-off"></i>
        <span class="logo-name">疯人电影院</span>
      </div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#000"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">全部</el-menu-item>
        <el-menu-item index="2">电影</el-menu-item>
        <el-menu-item index="3">电视剧</el-menu-item>
        <el-menu-item index="4">综艺</el-menu-item>
      </el-menu>
      <el-input v-model="input" placeholder="请输入电影名" prefix-icon="el-icon-search"></el-input>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>欢迎来到Graceji的疯人电影院</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss">

.el-container {
  height: 100%;
  .el-menu--horizontal {
    width: 700px;
    display: flex;
    justify-content: space-between;
  }
  .el-header {
    background-color: #000;
    opacity: 0.8;
    display: flex;
    align-items: center;
    .logo {
      color: #fff;
    }
    .el-input {
      flex: 1;
    }
  }
}

.el-footer {
  background-color: #000;
  opacity: 0.8;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(250, 251, 252);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: rgb(250, 251, 252);
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
