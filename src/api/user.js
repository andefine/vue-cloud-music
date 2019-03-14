import http from '../utils/http'

/**
 * 使用手机号登录。
 * 完成登录后 , 会在浏览器保存一个 Cookies 用作登录凭证 , 大部分 API 都需要用到这个 Cookies。
 * 调用登录接口的速度比调用其他接口慢 , 因为登录过程调用了加密算法
 *
 * @export
 * @param {*} phone
 * @param {*} password
 * @returns
 */
export function login (phone, password) {
  return http({
    url: `/login/cellphone?phone=${phone}&password=${password}`
  })
}

/**
 * 调用此接口 , 可退出登录
 *
 * @export
 * @returns
 */
export function logout () {
  return http({
    url: '/logout'
  })
}

export function getLoginStatus () {
  return http({
    url: '/login/status'
  })
}
