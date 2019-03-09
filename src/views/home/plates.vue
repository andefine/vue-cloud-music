<template>
  <div class="plates">
    <div class="plates__item" v-for="(item, index) in plates" :key="index">
      <div class="plates__item-icon iconfont" :class="item.icon"></div>
      <span class="plates__item-title">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      plates: [
        {
          title: '私人FM',
          icon: 'icon-FM'
        },
        {
          title: '每日推荐',
          icon: 'icon-rili'
        },
        {
          title: '歌单',
          icon: 'icon-playlist'
        },
        {
          title: '排行版',
          icon: 'icon-paihang'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.plates {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  height: 300px;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__item-icon {
    border-radius: 50%;
    width: 146px;
    height: 146px;
    line-height: 146px;
    text-align: center;
    background: $theme;
    box-shadow: 0 3px 40px rgba($theme, 0.5);
  }
  &__item-title {
    margin-top: 20px;
    font-size: 36px;
  }
}
</style>
