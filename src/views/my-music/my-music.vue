<template>
  <div class="my-music">

    <div class="mine-user">
      <div class="mine-user-bar">
        <div class="mine-user-bar__user">
          <div class="mine-user-bar__avatar--default iconfont icon-default-avatar"></div>
          <span class="mine-user-bar__username">未登录</span>
        </div>
        <div class="mine-user-bar__btn">开通会员</div>
      </div>
    </div>

    <div
      v-for="(item, index) in items"
      :key="index"
      class="mine-item"
    >
      <div
        class="mine-item__icon iconfont"
        :class="`icon-${item.iconClass}`"
      ></div>
      <div class="mine-item__name">
        {{item.name}}
        <span class="mine-item__label">({{item.label}})</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: '本地音乐',
          iconClass: 'local-music'
        },
        {
          name: '最近播放',
          iconClass: 'recent-play'
        },
        {
          name: '下载管理',
          iconClass: 'download'
        },
        {
          name: '我的电台',
          iconClass: 'radio'
        },
        {
          name: '我的收藏',
          iconClass: 'collection',
          label: '专辑/歌手/视频/专栏'
        },
        {
          name: 'Sati 空间',
          iconClass: 'sati',
          label: '特别的聆听模式'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.mine-user {
  position: relative;
  padding: 22px 18px;
  font-size: 46px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 128px;
    background: $theme;
  }
}
.mine-user-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;
  border-radius: 20px;
  padding: 0 36px 0 40px;
  height: 204px;
  background: linear-gradient(to bottom, #fcecec 0%, #fefaf9 100%);
  box-shadow: 0 2px 100px rgba($color: #000000, $alpha: 0.1);
  &__user {
    display: flex;
    align-items: center;
  }
  &__avatar--default {
    border-radius: 50%;
    width: 132px;
    height: 132px;
    line-height: 132px;
    font-size: 132px;
    color: #d7d8da;
  }
  &__username {
    margin-left: 30px;
  }
  &__btn {
    border: 2px solid $deepTheme;
    border-radius: 72px;
    padding: 0 30px;
    height: 72px;
    line-height: 72px;
    font-size: 36px;
    color: $deepTheme;
  }
}

.mine-item {
  display: flex;
  align-items: center;
  height: 150px;
  &__icon {
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    font-size: 66px;
    color: $deepTheme;
  }
  &__name {
    flex-grow: 1;
    box-sizing: border-box;
    border-bottom: 2px solid #e6e6e6;
    height: 150px;
    line-height: 150px;
  }
  &__label {
    font-size: 36px;
    color: $subFont;
  }
}
</style>
