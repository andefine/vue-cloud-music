<template>
  <div class="test">
    <button @click="handleClick">点我</button>
    <Toast message="I am a Toast"/>
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
      this.$toast('tantantan')
    }
  }
}
</script>

<style>

</style>
