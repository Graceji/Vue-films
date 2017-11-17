<template>
  <div class="nav-header">
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
    <el-button type="success">登录</el-button>
    <el-button type="text">注销</el-button>
  </div>
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
  }
  .el-input {
    flex: 1;
    margin-right: 20px;
  }
}
</style>
