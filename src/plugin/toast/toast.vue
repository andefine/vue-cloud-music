<template>
  <transition name="fade">
    <div class="toast" v-show="show">{{message}}</div>
  </transition>
</template>

<script>
export default {
  props: {
    message: String
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  border-radius: 20px;
  padding: 20px 50px;
  max-width: 80%;
  line-height: 1.4;
  color: #fff;
  background: rgba(0, 0, 0, .7);
  transform: translate(-50%, -50%);
}
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
