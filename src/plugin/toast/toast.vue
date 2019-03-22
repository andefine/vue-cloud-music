<template>
  <transition name="fade">
    <div :class="`toast--${position}`" v-show="show">
      <i class="toast__icon" :class="iconClass" v-if="iconClass"></i>
      <span class="toast__text">{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: String,
    position: {
      type: String,
      default: 'middle'
    },
    iconClass: String
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
.toast {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  border-radius: 20px;
  padding: 20px 50px;
  max-width: 80%;
  line-height: 1.4;
  color: #fff;
  background: rgba(0, 0, 0, .7);
  transform: translate(-50%, -50%);
  &--top {
    @extend .toast;
    top: 25%;
  }
  &--middle {
    @extend .toast;
    top: 50%;
  }
  &--bottom {
    @extend .toast;
    top: 75%;
  }
  &__icon {
    font-size: 150px;
    color: #fff;
  }
}
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
