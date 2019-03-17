import Vue from 'vue'

import toastComponent from './toast.vue'

const Toast = Vue.extend(toastComponent)

function showToast (options = {}) {
  const message = typeof options === 'string' ? options : options.message
  const duration = options.duration || 2000

  const toast = new Toast({
    el: document.createElement('div')
  })

  toast.message = message
  toast.show = true

  document.body.appendChild(toast.$el)

  setTimeout(() => {
    toast.show = false
  }, duration)
}

function registryToast () {
  Vue.prototype.$toast = showToast
}

export default registryToast
