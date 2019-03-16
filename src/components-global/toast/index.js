import Vue from 'vue'

import toastComponent from './toast.vue'

const ToastConstructor = Vue.extend(toastComponent)

function showToast (text, duration = 2000) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        text,
        show: true
      }
    }
  })

  document.body.appendChild(toastDom.$el)

  setTimeout(() => {
    toastDom.show = false
  }, duration)
}

function registryToast () {
  Vue.prototype.$toast = showToast
}

export default registryToast
