import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import AllVideo from '@/pages/AllVideo'
import Detail from '@/pages/Detail'
import Film from '@/pages/Film'
import TVplay from '@/pages/TVplay'
import VarietyShow from '@/pages/VarietyShow'

Vue.use(Router)

export default new Router({
  mode: 'history', // HTML5 History 模式
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home,
      redirect: '/allVideos',
      children: [{
        path: 'allVideos',
        name: 'allVideo',
        component: AllVideo
      }, {
        path: 'film',
        name: 'film',
        component: Film
      }, {
        path: 'tvPlay',
        name: 'tvPlay',
        component: TVplay
      }, {
        path: 'varietyShow',
        name: 'varietyShow',
        component: VarietyShow
      }]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
