<template>
  <div class="test">
    <button @click="handleClick">点我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$toast('I am a toast')
    }
  }
}
</script>

<style>

</style>
