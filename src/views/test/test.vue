<template>
  <div class="test">
    <button @click="handleClick(0, $event)">默认</button>
    <button @click="handleClick(1, $event)">在底部</button>
    <button @click="handleClick(2, $event)">有图标</button>
    <Toast
      message="I am a toast"/>
  </div>
</template>

<script>
import Toast from '../../plugin/toast/toast'

export default {
  components: {
    Toast
  },
  methods: {
    handleClick (index, e) {
      if (index === 0) {
        this.$toast({
          message: 'I am a toast'
        })
      }
      if (index === 1) {
        this.$toast({
          message: 'I am a toast',
          position: 'bottom'
        })
      }
      if (index === 2) {
        this.$toast({
          message: 'I am a toast',
          iconClass: 'iconfont icon-cross'
        })
      }
    }
  }
}
</script>

<style>

</style>
