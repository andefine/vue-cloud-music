<template>
  <header class="index-header">
    <span class="iconfont icon-list"></span>
    <div class="index-header-tab">
      <span class="index-header-tab__item iconfont icon-music"></span>
      <span class="index-header-tab__item iconfont icon-netease"></span>
      <span class="index-header-tab__item iconfont icon-video"></span>
    </div>
    <span class="iconfont icon-search"></span>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.index-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 42px;
  height: 148px;
  background: $theme;
}

.index-header-tab {
  &__item {
    margin-right: 96px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
