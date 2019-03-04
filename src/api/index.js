import http from '@/utils/http'

export const getBanners = () => http({
  url: 'banner'
})
