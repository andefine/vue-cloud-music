import Vue from 'vue'

// 引入toast组件，作为 component options (组件选项)
import toastOptions from './toast.vue'

// 文档是这样说的：
// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含 组件选项 的对象。
// Vue.extend 文档位置 https://vuejs.org/v2/api/#Vue-extend
// 在这里 Vue.extend 会返回一个实例构造器，
// 这样我们才能在后面使用 new Toast() 去生成一个 toast 实例，
// 并将它插入到页面结构中。
// 这里可能需要面向对象的知识会比较好理解很多(其实我对面向对象的理解也是一团浆糊￣ω￣=)
const Toast = Vue.extend(toastOptions)

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
