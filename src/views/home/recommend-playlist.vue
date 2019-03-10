<template>
  <div class="recommend-playlist">
    <card/>
  </div>
</template>

<script>
import Card from '@/components/card/card'

import * as api from '@/api'

export default {
  components: {
    Card
  },
  created () {
    api.getPlaylist({
      limit: 6,
      order: 'hot'
    })
  }
}
</script>

<style>
.recommend-playlist {

}
</style>
