<template>
  <div class="home">
    <home-header/>
    <home-nav/>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from './home-header'
import HomeNav from './home-nav'

export default {
  components: {
    HomeHeader,
    HomeNav
  }
}
</script>

<style lang="scss">

</style>
