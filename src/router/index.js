import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import AllVideo from '@/pages/AllVideo'
// import Film from '@/pages/Film'
// import TVplay from '@/pages/TVplay'
// import VarietyShow from '@/pages/VarietyShow'

Vue.use(Router)

export default new Router({
  mode: 'history', // HTML5 History 模式
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home,
      children: [{
        path: 'allVideos',
        name: 'allVideo',
        component: AllVideo
      }, {
        path: 'film',
        name: 'film',
        component: AllVideo
      }, {
        path: 'tvPlay',
        name: 'tvPlay',
        component: AllVideo
      }, {
        path: 'varietyShow',
        name: 'varietyShow',
        component: AllVideo
      }]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
