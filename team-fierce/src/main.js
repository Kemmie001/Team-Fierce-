import Vue from 'vue'
import App from './App.vue'



import './assets/css/tailwind.css'
import router from './router'
import store from './store/storeindex'
import axios from 'axios'

axios.defaults.baseURL = 'https://area-doctor.herokuapp.com/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
