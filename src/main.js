// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(Auth)
Vue.use(VueSweetalert2)

Vue.http.options.root = 'http://localhost:8000'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (response.status === 404) {
      Vue.swal(response.status.toString(), response.statusText, 'error')
    } else {
      if (response.status === 500) {
        Vue.swal(response.status.toString(), 'We are experiencing a problem in our servers!', 'error')
      }
    }
  })
})

Vue.config.productionTip = false

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/feed'
        })
      } else {
        next()
      }
    } else {
      if (to.matched.some(record => record.meta.forAuth)) {
        if (!Vue.auth.isAuthenticated()) {
          next({
            path: '/login'
          })
        } else {
          next()
        }
      } else {
        next()
      }
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
