<template>
  <div class="recommend">
    <top-swiper :data="banners" />
    <plates/>
    <cards-header title="推荐歌单"/>
    <recommend-playlist/>
  </div>
</template>

<script>
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
    TopSwiper,
    Plates,
    CardsHeader,
    RecommendPlaylist
  },
  async created () {
    const { banners } = await api.getBanners()
    this.banners = banners
  }
}
</script>

<style>

</style>
