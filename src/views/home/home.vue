<template>
  <div class="home">
    <home-header/>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from '@/components/home-header/home-header'
export default {
  components: {
    HomeHeader
  }
}
</script>

<style lang="scss">

</style>
