<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions('user', ['checkLogin'])
  },
  created () {
    // 组件重新创建时判断是否登录
    this.checkLogin()
    // 若登录后再进入登录路由，则跳转到主页
    if (this.$route.path === '/login') {
      this.checkLogin()
        .then(res => {
          if (res) {
            this.$router.push('/home/videos/all')
          }
        })
    }
  }
}
</script>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
