import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import Home from '@/components/auth/Home'
import Feed from '@/components/Feed'

import ProductCreate from '@/components/product/Create'
import ProductEdit from '@/components/product/Edit'

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
      name: 'Register',
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
    },
    {
      path: '/products/create',
      name: 'ProductCreate',
      component: ProductCreate,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/products/:product/edit',
      name: 'ProductEdit',
      component: ProductEdit,
      meta: {
        forAuth: true
      }
    }
  ],
  mode: 'history'
})
