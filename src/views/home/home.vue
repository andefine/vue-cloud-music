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
  data () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeNav
  },
  created () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => console.log(res))
  }
}
</script>

<style lang="scss">

</style>
