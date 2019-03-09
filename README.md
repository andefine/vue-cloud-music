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

## 网易云音乐版本 安卓5.9

## 知识点

### 使用vw实现移动适配

- [再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)
- [如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

#### 安装`postcss-px-to-viewport`
```shell
yarn add -D postcss-px-to-viewport
```

#### 打开`postcss.config.js`
```javascript
plugins: {
  autoprefixer: {},
  "postcss-px-to-viewport": {
    viewportWidth: 1080, // viewport的宽度。通俗点说就是ui给你的设计稿的宽度
    unitPrecision: 6, // 小数精确位数。转换过程中总有除不尽的情况，指定保留几位小数
  },
}
```
因为我的设计稿就是手机截图(Ｔ▽Ｔ)，所以`viewportWidth`是1080。但是一般在公司项目中，设计稿的宽度大多是750

[更多配置选项](https://github.com/evrone/postcss-px-to-viewport#usage)

### 自动导入样式文件

#### 需求描述

项目使用了`scss`，会定义一些变量，在大多数SFC(也就是`.vue`文件)文件中需要用到

#### 手动导入

- `src`下新建`styles`文件夹，文件夹下新建`color.scss`
```scss
// src/styles/color.scss
$theme: #e04438;
```

- 在需要使用到这个变量的`.vue`文件中
```scss
<style lang="scss">
@import '../../styles/color.scss';
.test {
  background: $theme;
}
</style>
```
如果我们不这样手动导入，保存编译时就会报错，但是又很懒还老是忘，肿么办呢，找`webpack`帮忙呗

#### 自动导入

先看`vue cli 3`文档，[`Automatic imports`](https://cli.vuejs.org/guide/css.html#automatic-imports)

那么就简单了，`C`+`V`，再修改一下：
```javascript
// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/color.scss'),
      ],
    })
}
```
当然，我们还需要安装`style-resources-loader`
```shell
yarn add -D style-resources-loader
```
修改之后记得重新`yarn serve`，否则修改后的配置文件是不生效的

### 使用 iconfont-阿里巴巴图标库

#### 下载必要文件

可以看官方[帮助文档](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d0091c141&helptype=code)，也可以搜索几篇文章看一下怎么弄，很简单的。

大致流程：搜索图标->添加至购物车->添加至项目->在项目中将源码下载至本地

#### 如何使用

我使用的方式是`font-class`，先打开`iconfont.css`文件，拉到最下面，可以看到以`icon-`开头的类名，分别对应到在下载下来的图标项目中的图标。

将`iconfont.css`文件放到我们项目中的某个文件(随便你放哪儿)，接着我们需要在`main.js`中引入这个文件。最后使用，直接在页面标签中添加类名
```html
<div class="iconfont icon-list"></div>
```
到这里还没完，保存时会发现报错，缺少四个文件，我们再把以`iconfont`为文件名，以`eot``svg``ttf``woff`这个四个文件放到`iconfont.css`同样的文件夹下，完成，收工

### 在`scss`中使用`BEM`[直达链接](https://github.com/andefine/knowledge-points/blob/master/css/use-BEM-in-scss.md)

### vue-awesome-swiper使用v-for渲染数据时，设置loop:true无效
解决方法：在父元素中添加v-if="xxx.length > 0"。答案在此[{ loop: true } swiper-slide goes wrong when data is from v-for](https://github.com/surmon-china/vue-awesome-swiper/issues/322)
