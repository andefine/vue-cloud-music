<template>
  <header>
    <span class="iconfont icon-list"></span>
    <div class="middle">
      <span class="iconfont icon-music"></span>
      <span class="iconfont icon-netease"></span>
      <span class="iconfont icon-video"></span>
    </div>
    <span class="iconfont icon-search"></span>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 42px;
  height: 148px;
  background: $theme;
}
</style>
