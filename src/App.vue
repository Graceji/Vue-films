<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions('user', ['checkLogin'])
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName
    })
  },
  created () {
    // 若登录后再进入登录路由，则跳转到主页
    if (this.$route.path === '/login') {
      this.checkLogin()
        .then(() => {
          if (this.userName) {
            this.$router.push('/home')
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
