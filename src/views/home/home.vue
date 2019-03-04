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
import * as api from '@/api'

export default {
  data () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeNav
  },
  created () {
    api.getBanners()
  }
}
</script>

<style lang="scss">

</style>
