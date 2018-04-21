// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

const instance = axios.create({
  baseURL: '/mobile',
  timeout: 10000
})
Object.defineProperty(Vue.prototype, '$ajax', { value: instance })

import '@/assets/styles/uireset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
