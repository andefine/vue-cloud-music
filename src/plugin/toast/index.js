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
  // 下面这行的写法可以让我们在使用 `this.$toast()` 的时候，
  // 可以直接传入一个字符串，也可以传入一个配置对象
  const message = typeof options === 'string' ? options : options.message
  const duration = options.duration || 3000
  const position = options.position || 'middle'
  const iconClass = options.iconClass || ''

  const instance = new Toast({
    el: document.createElement('div')
  })

  instance.message = message
  instance.show = true
  instance.position = position
  instance.iconClass = iconClass

  document.body.appendChild(instance.$el)

  setTimeout(() => {
    instance.show = false
  }, duration)
}

export default function () {
  Vue.prototype.$toast = showToast
}
