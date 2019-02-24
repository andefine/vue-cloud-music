# vue-cloud-music

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 知识点

### 使用vw实现移动适配

- [再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)
- [如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

#### 安装`postcss-px-to-viewport`
```shell
yarn add postcss-px-to-viewport
```

#### 打开`postcss.config.js`
```javascript
plugins: {
  autoprefixer: {},
  "postcss-px-to-viewport": {
    viewportWidth: 750, // viewport的宽度。通俗点说就是ui给你的设计稿的宽度
    unitPrecision: 6, // 小数精确位数。转换过程中总有除不尽的情况，指定保留几位小数
  },
}
```
[更多配置选项](https://github.com/evrone/postcss-px-to-viewport#usage)
