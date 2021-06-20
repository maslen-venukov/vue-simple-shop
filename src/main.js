import Vue from 'vue'
import axios from 'axios'

import App from './App'

import router from './router'
import store from './store'

import './assets/styles/style.sass'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
