import 'normalize.css' // A modern, HTML5-ready alternative to CSS resets 样式初始化
import './iconfont/iconfont.css'
import './styles/index.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import * as filters from './filters'
import toastRegistry from './components-global/toast'

Vue.use(toastRegistry)

Vue.use(VueLazyload)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
