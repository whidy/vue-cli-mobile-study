# 基于Vue-CLI下的非跨域请求模拟数据接口的解决方案

> 前几天一直在研究`Mockjs`, 不记得从哪里看到这个工具[`axios-mock-adapter`](https://github.com/ctimmerm/axios-mock-adapter), 配合了`Mockjs`在`Vue-cli`下可以模拟数据接口, 也不存在跨域问题了.

## 特点

* 无需额外开启一个mockjs的server
* 不存在跨域问题
* 能够快速实现接口更新
* 模拟虚假的随机数据

## 配置说明

需要用到的主要组件包括

* [axios](https://github.com/axios/axios)
* [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
* [mockjs](https://github.com/nuysoft/Mock/wiki)

我在`src`下建立了一个`mock`目录, 并创建了`index.js`存放接口配置和`axios`相关配置, 其中为了测试, 我在该目录的`index.js`中写了两个接口, 接口数据有采用`mockjs`自动生成随机数据. 如果有需要的话, 自行将其模块化.

接着在`main.js`引入上面写好的mock的配置. 然后我们就可以在组件使用了.

该demo以`HelloWorld.vue`测试. 在`created`上请求数据. 并渲染DOM, 点击`button`可以获取随机的数据列表.

## 其他

拉下该分支后, `npm install`完成后执行`npm run dev`, 启动浏览器访问, 查看效果

参阅: [改造vue-cli,使用mockjs搭建mock server](https://juejin.im/post/5acdb5345188255c5668caa5)

---

更新:

`2018年4月27日` 完成该项目操作后, 发现一篇也很不错的, 思路和我差不多的一篇文章, 也推荐大家学习阅读: [学习不一样的vue4:mock与axios实战1](http://yangyi1024.com/2017/06/14/%E5%AD%A6%E4%B9%A0%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84vue4:mock%E4%B8%8Eaxios%E5%AE%9E%E6%88%981/)