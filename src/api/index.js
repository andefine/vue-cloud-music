import http from '@/utils/http'

export const getBanners = () => http({
  url: '/banner'
})

export const getPlaylist = (params = {}) => {
  return http({
    url: '/top/playlist',
    params
  })
}

export const getRecommendPlaylists = () => {
  return http({
    url: '/personalized'
  })
}

export * from './user'
