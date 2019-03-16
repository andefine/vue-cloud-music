<template>
  <div class="index">
    <IndexHeader/>
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
