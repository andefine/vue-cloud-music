<template>
  <header class="index-header">
    <i class="iconfont icon-list"></i>
    <div class="index-header-tab">
      <i class="index-header-tab__item iconfont icon-music"></i>
      <i class="index-header-tab__item iconfont icon-netease"></i>
      <i class="index-header-tab__item iconfont icon-video"></i>
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
