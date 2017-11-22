<template>
  <div class="nav-header">
    <div class="logo">
      <i class="el-icon-star-off"></i>
      <span class="logo-name">疯人电影院</span>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="allVideos">全部</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="film">电影</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="tvPlay">电视剧</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="varietyShow">综艺</router-link>
      </el-menu-item>
    </el-menu>
    <!-- v-model="input" -->
    <el-input placeholder="请输入电影名" prefix-icon="el-icon-search"></el-input>
    <el-button type="success">登录</el-button>
    <el-button type="warning">注册</el-button>
    <el-button type="text">注销</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    switch (this.$route.path) {
      case '/allVideos':
        this.activeIndex = '1'
        break
      case '/film':
        this.activeIndex = '2'
        break
      case '/tvPlay':
        this.activeIndex = '3'
        break
      case '/varietyShow':
        this.activeIndex = '4'
        break
      default:
        break
    }
  }
}
</script>

<style lang="scss">
.nav-header {
  flex: 1;
  display: flex;
  align-items: center;
  .logo {
    color: #fff;
  }
  .el-menu--horizontal {
    width: 600px;
    display: flex;
    justify-content: space-between;
    .el-menu-item {
      a {
        text-decoration: none;
      }
    }
  }
  .el-input {
    flex: 1;
    margin-right: 20px;
  }
}
</style>
