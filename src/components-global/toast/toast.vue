<template>
  <div class="toast" v-show="show">{{text}}</div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
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
  background: rgba(0,0,0,.35);
  padding: 30px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
  color:#fff;
}
</style>
