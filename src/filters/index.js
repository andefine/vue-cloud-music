/**
 * 大于等于十万，转成 'xxx万'；小于十万，不变
 *
 * @export
 * @param {Number} count
 */
export function formatCount (count) {
  if (count < 100000) {
    return count
  }

  return Math.round(count / 10000) + '万'
}
