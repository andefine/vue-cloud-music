<template>
  <div class="home">
    <home-header/>
    <home-nav/>
    <top-swiper :data="banners" />
  </div>
</template>

<script>
import HomeHeader from './home-header'
import HomeNav from './home-nav'
import TopSwiper from '@/components/top-swiper/top-swiper'

import * as api from '@/api'

export default {
  data () {
    return {
      banners: []
    }
  },
  components: {
    HomeHeader,
    HomeNav,
    TopSwiper
  },
  async created () {
    const { banners } = await api.getBanners()
    this.banners = banners
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
