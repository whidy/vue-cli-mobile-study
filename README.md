# 基于Vue-CLI下的非跨域请求模拟数据接口的解决方案

> 前几天一直在研究mockjs, 不记得从哪里看到这个工具[`axios-mock-adapter`](https://github.com/ctimmerm/axios-mock-adapter), 配合了`Mockjs`在`Vue-cli`下可以模拟数据接口, 也不存在跨域问题了.

## 特点

* 无需额外开启一个mockjs的server
* 不存在跨域问题
* 能够快速实现接口更新

## 配置说明

需要用到的主要组件包括

* [axios](https://github.com/axios/axios)
* [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
* [mockjs](https://github.com/nuysoft/Mock/wiki)

我在`src`下建立了一个`mock`目录, 并创建了`index.js`存放接口配置和`axios`相关配置, 其中为了测试, 我在该目录的`index.js`中写了两个接口, 接口数据有采用`mockjs`自动生成随机数据. 如果有需要的话, 自行将其模块化.

接着在`main.js`引入上面写好的mock的配置. 然后我们就可以在组件使用了.

该demo以`HelloWorld.vue`测试. 在`created`上请求数据. 并渲染DOM, 点击`button`可以获取随机的数据列表.

## 其他

拉下该分支后, `npm install`完成后执行`npm run dev`查看效果














参阅: [改造vue-cli,使用mockjs搭建mock server](https://juejin.im/post/5acdb5345188255c5668caa5)