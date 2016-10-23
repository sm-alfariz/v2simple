// import Vue from 'vue'
// import App from './App'
// var VueRouter = require('vue-router')
// Vue.use(VueRouter)
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import App from './App'
import routes from './routes'
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
