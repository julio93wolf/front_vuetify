import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import Home from '@/components/auth/Home'
import Feed from '@/components/Feed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      name: 'Home',
      component: Home,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
      meta: {
        forAuth: true
      }
    }
  ]
})
