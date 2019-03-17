<template>
  <transition name="fade">
    <div class="toast" v-show="show">{{message}}</div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      show: false
    }
  }
}
</script>

<style>
.toast {
  position: fixed;
  left: 50%;
  top:50%;
  background: rgba(0, 0, 0, .35);
  padding: 30px;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  color:#fff;
}
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
