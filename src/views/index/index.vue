<template>
  <div class="index">
    <index-header/>
    <router-view/>
  </div>
</template>

<script>
import IndexHeader from './index-header'

export default {
  components: {
    IndexHeader
  }
}
</script>

<style>

</style>
