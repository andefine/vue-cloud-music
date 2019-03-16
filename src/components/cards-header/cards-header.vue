<template>
  <div class="cards-header">
    <h3 class="cards-header__title">{{title}}</h3>
    <i class="cards-header__arrow iconfont icon-right"></i>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.cards-header {
  display: flex;
  align-items: center;
  padding: 0 18px;
  height: 138px;
  &__title {
    margin: 0;
    font-size: 52px;
  }
  &__arrow {
    margin-left: 20px;
    font-size: 40px;
    color: #959595;
  }
}
</style>
