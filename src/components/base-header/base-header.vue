<template>
  <div class="base-header">
    <div class="base-header__back iconfont icon-back"></div>
    <span class="base-header__title">手机号登录</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.base-header {
  display: flex;
  align-items: center;
  padding: 0 52px;
  height: 152px;
  color: #fff;
  font-size: 54px;
  font-weight: bold;
  background: $theme;
  .iconfont {
    font-size: 54px;
  }
  &__back {
    margin-right: 54px;
  }
}
</style>
