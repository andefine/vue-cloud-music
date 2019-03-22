import Vue from 'vue'
import toastComponent from './toast.vue'

const Toast = Vue.extend(toastComponent)

// 这个数组是来存放 Toast 实例。
// 但是注意，并不是所有已经新建的实例，
// 而是已经新建的并且已经隐藏起来的实例。
// 来看一下整体流程，大概就明白为什么这样做了。
// 首先是没有实例，当我们第一次调用 this.$toast 时，
// 就新建一个实例，当这个 toast 隐藏之后，
// 将这个实例 push 到这个数组中。
// 那么在我们下一次调用 this.$toast 时，如果这个数组为空，
// 说明之前的实例还没有隐藏，那我们只能重新新建一个实例；
// 另一种情况，只要数组中有一个值，说明已经有之前新建的实例，
// 而且已经隐藏，那我们便可以拿它重新使用，并不需要新建实例。
// 这样便达到可以同时显示多个 toast 而且不会新建多余实例
const instances = []

/**
 * 这个函数主要是获取一个可用实例
 *
 * @returns
 */
function getAnAvailibleInstance () {
  if (instances.length > 0) {
    // const instance = instances[0]
    // instances.shift()
    // return instance
    // 其实上面三行可以写成：
    return instances.shift()
    // 然这般甚骚
  }
  return new Toast({
    el: document.createElement('div')
  })
}

function removeDom (e) {
  if (e.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

function showToast (options = {}) {
  console.log(instances)
  const instance = getAnAvailibleInstance()
  clearTimeout(instance.timer)

  instance.message = typeof options === 'string' ? options : options.message
  const duration = options.duration || 3000
  // 添加 toast 在页面中显示的位置和图标class 选项，
  // 当然页面结构和css都要作相应修改。
  // 我这里使用的阿里的iconfont，项目中需要导入相关文件。
  instance.position = options.position || 'middle'
  instance.iconClass = options.iconClass || ''

  document.body.appendChild(instance.$el)

  // 这里使用使用了 Vue.nextTick 全局api。
  // 因为我们改变数据，然后 Vue 更新 DOM 是异步的，
  // 使用 Vue.nextTick 的作用就是保证 DOM 更新
  // 完毕之后再执行 .then 中的回调(Vue.nextTick 支持 promise 风格哟)
  // 我试过不使用 Vue.nextTick 也可行，但这样更严谨一点嘛[狗头]
  Vue.nextTick()
    .then(() => {
      instance.show = true

      // 在显示时间结束之后，移除节点。
      // 并且将该实例重新 push 到 instances 数组中，
      // 这样 instances 数组中保存的就是已经隐藏的实例。
      // (其实这里我觉得也是有点问题的，是不是应该在
      // 这个 transition 结束之后再 push 呢？？？
      // 可是好像并没有什么好的办法做到这样，toast-ui 中也是这样做的。
      // 另外 toast-ui 在显示之后先是移除了 transitionend 监听器，
      // 不是很明白为什么要先来移除这一步。希望有大佬解惑一哈)
      instance.timer = setTimeout(() => {
        // 添加监听器，在 transition 结束之后移除节点
        instance.$el.addEventListener('transitionend', removeDom)
        instance.show = false
        instances.push(instance)
      }, duration)
    })
}

export default function () {
  Vue.prototype.$toast = showToast
}
