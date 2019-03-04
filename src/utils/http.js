import config from '@/config'

const base = config.baseUrl

export default async function (config) {
  const baseUrl = config.baseUrl || base
  let url = config.url

  if (url[0] !== '/') {
    url = '/' + url
  }

  const fullUrl = baseUrl + url

  const response = await fetch(fullUrl)

  return response
}
