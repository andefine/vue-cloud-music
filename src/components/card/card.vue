<template>
  <div class="card">
    <img class="card__img" :src="data.coverImgUrl" alt="">
    <span class="card__name">{{data.name}}</span>
    <div class="card__mask"></div>
    <div class="card__playcount">
      <span class="card__playcount-earphone iconfont icon-earphone"></span>
      <span>{{data.playCount | formatCount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    divide: String, // 表示几等分。'two' 'three'
    data: Object
  }
}
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 342px;
  height: 522px;
  &__img {
    border-radius: 12px;
    width: 342px;
    height: 342px;
  }
  &__name {
    display: -webkit-box;
    overflow: hidden;
    margin-top: 20px;
    padding: 0 8px;
    line-height: 48px;
    font-size: 36px;
    color: #333;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &__mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 342px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)
  }
  &__playcount {
    position: absolute;
    top: 12px;
    right: 14px;
    font-size: 32px;
    color: #fff;
    opacity: 0.8;
  }
  &__playcount-earphone {
    margin-right: 8px;
    font-size: 32px;
  }
}
</style>
