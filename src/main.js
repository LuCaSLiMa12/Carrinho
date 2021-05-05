import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
