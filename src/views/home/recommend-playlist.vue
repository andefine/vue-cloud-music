<template>
  <div class="recommend-playlist">
    <card
      v-for="(item, index) in playlists"
      :key="index"
      divide="three"
      :data="item"
    />
  </div>
</template>

<script>
import Card from '@/components/card/card'

import * as api from '@/api'

export default {
  components: {
    Card
  },
  data () {
    return {
      playlists: []
    }
  },
  async created () {
    const { playlists } = await api.getPlaylist({
      limit: 6,
      order: 'hot'
    })
    this.playlists = playlists
  }
}
</script>

<style>
.recommend-playlist {
  display: grid;
  grid-template-columns: 342px 342px 342px;
  justify-content: space-between;
  padding: 0 18px;
}
</style>
