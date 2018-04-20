# vue-cli-mobile-study

> a vue-cli study for mobile

## 项目介绍

该脚手架用于移动端开发学习, 目前使用的UI框架是`Vant`, 使用`PostCSS`进行css编写, 适配方案使用`VW`方案.

其他插件使用了`Vuex`, `Axios`, `moment.js`等

后期还会引入更多功能, 复杂的内容慢慢增加学习深度. 因此该项目将会产生很多分支用于测试总结.

## 其他说明

`browserslist`使用的是默认的, 项目兼容规则以`package.json`为准

**.babelrc**内对es6的默认配置调整了, 因为浏览器兼容我写在了`package.json`. 并添加了vant的UI(参阅Vant官方文档中提到的引入组件, [方式一](https://www.youzanyun.com/zanui/vant#/zh-CN/quickstart))

```javascript
{
  "presets": [["env", { "modules": false }]],
  "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

**.postcssrc.js**也做了相应修改, 主要是运用相关插件对css处理, 内容有点长, 自行点击文件查看.

修改了`./vue-cli-mobile-study/config/index.js`中的`host`为`0.0.0.0`, 方便局域网内其他设备访问.

个人使用VSCode进行开发, 安装有Vetur, Prettier等插件, 项目中也使用了`eslint-config-prettier`插件, 来避免冲突. 也就修改了`.eslintrc.js`一点点. 具体可以查阅[Integrating with ESLint](https://prettier.io/docs/en/eslint.html)

补充, 路由用的`history`模式.

补充, 修改了`./vue-cli-mobile-study/config/index.js`中产出文件路径, 我个人倾向用`nginx`管理站点, 因此修改了这里配置. 方便在build后, 模拟正式环境的操作~

下面是vue-cli项目运行自带内容.

![vue-cli快速实践](http://wx1.sinaimg.cn/large/46444bacgy1fpyj1vux8bg208c054tyf.gif)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
