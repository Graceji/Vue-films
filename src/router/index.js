import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history', // HTML5 History 模式
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    }
  ]
})
