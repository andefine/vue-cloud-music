<template>
  <div class="toast">{{message}}</div>
  <!-- <transition name="fade">
  </transition> -->
</template>

<script>
export default {
  props: {
    message: String
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
/* .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave-to {
  opacity: 0;
} */
</style>
