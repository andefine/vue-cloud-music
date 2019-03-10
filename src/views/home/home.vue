<template>
  <div class="home">
    <home-header/>
    <home-nav/>
    <top-swiper :data="banners" />
    <plates/>
    <cards-header title="推荐歌单"/>
    <recommend-playlist/>
  </div>
</template>

<script>
import HomeHeader from './home-header'
import HomeNav from './home-nav'
import TopSwiper from '@/components/top-swiper/top-swiper'
import Plates from './plates'
import CardsHeader from '@/components/cards-header/cards-header'
import RecommendPlaylist from './recommend-playlist'

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
    TopSwiper,
    Plates,
    CardsHeader,
    RecommendPlaylist
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
