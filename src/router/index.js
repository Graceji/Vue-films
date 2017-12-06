import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import Videos from '@/pages/Videos'

Vue.use(Router)

// export default new Router({
//   mode: 'history', // HTML5 History 模式
//   routes: [
//     {
//       path: '/',
//       name: 'HomePage',
//       component: Home,
//       redirect: '/videos',
//       children: [{
//         path: 'videos',
//         name: 'videos',
//         component: Videos
//       }]
//     }, {
//       path: 'login',
//       name: 'Login',
//       component: Login
//     }, {
//       path: 'register',
//       name: 'Register',
//       component: Register
//     }, {
//       path: 'detail/:id',
//       name: 'Detail',
//       component: Detail
//     }
//   ]
// })

export default new Router({
  mode: 'history', // HTML5 History 模式
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: 'videos',
      name: 'videos',
      component: Videos
    }, {
      path: 'videos/:type',
      name: 'typeVideos',
      component: Videos
    }, {
      path: 'videos/:type/:page',
      name: 'pageVideos',
      component: Videos
    }]
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }]
})
