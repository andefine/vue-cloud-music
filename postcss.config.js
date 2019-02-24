module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 1080, // viewport的宽度。通俗点说就是ui给你的设计稿的宽度
      unitPrecision: 6, // 小数精确位数。转换过程中总有除不尽的情况，指定保留几位小数
    },
  }
}
