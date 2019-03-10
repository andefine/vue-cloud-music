import config from '@/config'

const base = config.baseUrl

/**
 * 封装的请求函数
 *
 * @export
 * @param {*} config 参数。json对象
 *
 * config 项
 * @param {String} baseUrl 选填，基础路径
 * @param {String} url 必填，路径
 * @param {String} method 选填，请求方法，默认'GET'，大小写均可
 * @param {Object} params 选填，查询参数，将会转成 query string
 * @returns
 */
export default async function (config) {
  const baseUrl = config.baseUrl || base
  let url = config.url
  const method = (config.method || 'GET').toUpperCase()
  const params = config.params || {}

  if (url[0] !== '/') {
    url = '/' + url
  }

  const fullUrl = baseUrl + url + '?' + jsonToQueryString(params)

  const response = await fetch(fullUrl, {
    method
  })

  return response.json()
}

/**
 * json对象转 query string。
 * 请保证属性值为 String 和 Number 类型。
 *
 * @param {*} json
 * @returns
 */
function jsonToQueryString (json) {
  let str = ''
  for (let attr in json) {
    str += attr + '=' + json[attr] + '&'
  }
  return str.slice(0, str.length - 1)
}
