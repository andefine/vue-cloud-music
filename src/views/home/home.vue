<template>
  <div class="home">
    <home-header/>
    <home-nav/>
    <div class="home-swiper">
      <div class="home-swiper__bg"></div>
      <base-swiper :data="banners" />
    </div>
  </div>
</template>

<script>
import HomeHeader from './home-header'
import HomeNav from './home-nav'
import BaseSwiper from '@/components/base-swiper/base-swiper'

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
    BaseSwiper
  },
  async created () {
    const { banners } = await api.getBanners()
    this.banners = banners
  }
}
</script>

<style lang="scss">
.home-swiper {
  position: relative;
  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 324px;
    background: $theme;
  }
}
</style>
