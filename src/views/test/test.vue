<template>
  <div class="test">
    <button @click="handleClick">点我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$toast('tantantan')
    }
  }
}
</script>

<style>

</style>
