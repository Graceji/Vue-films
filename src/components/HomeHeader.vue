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
        <router-link :to="{ path: '/videos', query: { type: 'all' } }">全部</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ path: '/videos', query: { type: 'film' } }">电影</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{ path: '/videos', query: { type: 'tvplay' } }">电视剧</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link :to="{ path: '/videos', query: { type: 'variety' } }">综艺</router-link>
      </el-menu-item>
    </el-menu>
    <!-- v-model="input" -->
    <el-input placeholder="请输入电影名" prefix-icon="el-icon-search"></el-input>
    <el-button type="success" v-if="!isLogin">
      <router-link to="/login">登录</router-link>
    </el-button>
    <span v-if="isLogin" class="welcome">欢迎{{this.username}}的到来！</span>
    <el-button type="warning" v-if="!isLogin">
      <router-link to="/register">注册</router-link>
    </el-button>
    <el-button type="text" @click="logout" v-if="isLogin">注销</el-button>
  </div>
</template>

<script>
import { checkLogin, signout } from '../data'
export default {
  data () {
    return {
      activeIndex: '1',
      isLogin: true,
      username: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    hasLogin () {
      checkLogin()
        .then(res => {
          if (res) {
            this.isLogin = true
            this.username = res
          } else {
            this.isLogin = false
          }
        })
    },
    logout () {
      signout()
        .then(res => {
          if (res === '注销成功') {
            this.isLogin = false
          }
        })
    }
  },
  created () {
    // 检查是否登录
    this.hasLogin()
    switch (this.$route.query.type) {
      case 'all':
        this.activeIndex = '1'
        break
      case 'film':
        this.activeIndex = '2'
        break
      case 'tvplay':
        this.activeIndex = '3'
        break
      case 'variety':
        this.activeIndex = '4'
        break
      default:
        break
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #fff;
}
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
  .welcome {
    color: #fff;
  }
}
</style>
