<template>
  <div class="base-swiper">
    <ul class="base-swiper-images">
      <li class="base-swiper-images__item" v-for="(item, index) in data" :key="index">
        <img :src="item.imageUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style>
.base-swiper {
  height: 442px;
  width: 100%;
}

.base-swiper-images {
  width: 100%;
  height: 406px;
}
</style>
