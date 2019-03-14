<template>
  <div class="playlist-header">
    <div class="playlist-header__left">
      <div class="playlist-header__arrow--down iconfont icon-right"></div>
      <div class="playlist-header__title">创建的歌单(1)</div>
    </div>
    <div class="playlist-header__setting iconfont icon-setting"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.playlist-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 90px;
  font-size: 36px;
  color: $subFont;
  background: #f3f3f3;
  &__left {
    display: flex;
    align-items: center;
  }
  &__arrow {
    width: 36px;
    height: 36px;
    font-size: 36px;
    color: $subFont;
  }
  &__arrow--down {
    @extend .playlist-header__arrow;
    transform: rotate(90deg);
  }
  &__setting {
    font-size: 48px;
    color: $subFont;
  }
}
</style>
