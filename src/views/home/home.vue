<template>
  <div class="home">
    <HomeNav/>
    <router-view/>
  </div>
</template>

<script>
import HomeNav from './home-nav'

export default {
  data () {
    return {}
  },
  components: {
    HomeNav
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
