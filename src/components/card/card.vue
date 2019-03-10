<template>
  <div class="card">
    <img class="card__img" :src="data.coverImgUrl" alt="">
    <span class="card__name">{{data.name}}</span>
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
  width: 342px;
  height: 522px;
  &__img {
    border-radius: 12px;
    width: 342px;
    height: 342px;
  }
  &__name {
    margin-top: 20px;
    padding: 0 8px;
    line-height: 48px;
    font-size: 36px;
    color: #333;
  }
}
</style>
