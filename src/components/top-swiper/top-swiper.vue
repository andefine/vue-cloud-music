<template>
  <div class="top-swiper">
    <div class="top-swiper__bg"></div>
    <swiper class="swiper-com" :options="swiperOption" ref="topSwiper">
      <swiper-slide class="swiper-slide" v-for="(item, index) in data" :key="index">
        <img class="swiper-slide__img" :src="item.imageUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // eslint-disable-next-line
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        }
      }
    }
  },
  props: {
    data: Array
  }
}
</script>

<style lang="scss">
.top-swiper {
  position: relative;
  display: flex;
  align-items: center;
  height: 442px;
  width: 100%;
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 306px;
    background: $theme;
  }
}

.swiper-com {
  width: 100%;
  height: 406px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  &__img {
    width: 1044px;
    height: 100%;
    border-radius: 16px;
  }
}
.swiper-pagination-bullet-custom {
  margin: 0 11px !important;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.4;
  &.swiper-pagination-bullet-active {
    background: $theme;
    opacity: 0.9;
  }
}
</style>
