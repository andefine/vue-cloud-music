import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css' // A modern, HTML5-ready alternative to CSS resets 样式初始化

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
