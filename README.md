# 组件传递数据及自定义多个事件, 多个参数测试

该Demo包含以下知识点:

* 父子组建使用
* 数据通信
* 事件自定义
* 多参数测试
* slot自定义结构
* 底部固定容器自适应高度不遮挡内容区域功能

等等细节不多说.

不过这个demo的多参数传递, 这样写是否合理还有待考究.

> **多参数**下如果直接写一个`params`, 他会把数字自动转成字符串, 比如`['furtrue', 'xixi']`, 如果写成

```javascript
console.log(`I also love whidy in the ${params}!`)
console.log(`I also love whidy in the ${params[0]}, ${params[1]}!`)
```

输出结果几乎一致, 如下:

```
I also love whidy in the furtrue,xixi!
I also love whidy in the furtrue, xixi!
```

所以还要进一步研究.