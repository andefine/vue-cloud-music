<template>
  <div class="home-nav">
    <span class="home-nav__item--active">推荐</span>
    <span class="home-nav__item">朋友</span>
    <span class="home-nav__item">电台</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.home-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 118px;
  background: $theme;
  &__item {
    font-size: 46px;
    color: #fff;
    opacity: 0.9;
    &--active {
      @extend .home-nav__item;
      font-weight: bold;
      opacity: 1;
    }
  }
}
</style>
