<template>
  <div class="test">
    <button @click="handleClick">点我</button>
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
    handleClick () {
      this.$toast({
        message: 'I am a toast',
        iconClass: 'iconfont icon-cross'
      })
    }
  }
}
</script>

<style>

</style>
