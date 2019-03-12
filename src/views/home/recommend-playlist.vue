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
    await this.pickPlaylistsRandomly()
  },
  methods: {
    // 因为首页的推荐歌单每次刷新过后可能都不一样，但是呢，似乎并没有这个接口提供。那么，我们就模拟一个随机吧，先获取到 100 条，从中随机挑选 6 条
    async pickPlaylistsRandomly () {
      const { playlists } = await api.getPlaylist({
        order: 'hot'
      })

      // 随机算法 [javascript如何在一个数组里随机选出不重复的10项?](https://segmentfault.com/q/1010000006819233) 的第二条回答，效率更高哟
      const len = playlists.length
      for (let i = 0; i < 6; i++) {
        const range = len - i
        const rand = i + Math.floor(Math.random() * range)
        const temp = playlists[i]
        playlists[i] = playlists[rand]
        playlists[rand] = temp
      }
      this.playlists = playlists.splice(0, 6)
    }
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
