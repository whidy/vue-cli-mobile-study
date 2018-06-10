# Vue单页面应用使用vuex-persistedstate保存当前Vuex状态

## Demo两大特点

1. 可以通过localStorage或者sessionStorage来同步Vuex内的状态, 便于页面刷新或者关闭后, 依旧能保留上一次访问单页面应用的记录
1. 通过[`store.replaceState`](https://vuex.vuejs.org/zh/api/#replacestate)方法来清除记录(时光旅行)

https://github.com/robinvdvleuten/vuex-persistedstate

## 应用场景

我做这个测试是因为单页面应用下, Vuex状态无法在刷新页面后保留, 而我目前采用Nuxt项目中因为没有做服务端中间层, 因此用户在不同状态下鉴权只能通过后端接口请求来判断, 为了减轻后端压力, 我在本地存储和后台达成一致, 存为sessionStorage, 方便权限管理.
当用户退出时清除Store及sessionStorage则达到完美退出效果!