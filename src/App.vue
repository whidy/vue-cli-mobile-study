<template>
  <div id="app" class="app">
    <img src="./assets/logo.png">
    <h1>你爱小白吗</h1>
    <p class="tips">这是一个底部固定的自适应底部高度的小DEMO</p>
    <bottom-fixed :buttonList="buttonList" v-on:isLoveA="loveA($event)" v-on:isLoveB="loveB($event)"></bottom-fixed>
  </div>
</template>

<script>
import BottomFixed from './components/BottomFixed'
export default {
  name: 'App',
  components: {
    bottomFixed: BottomFixed
  },
  data() {
    return {
      buttonList: [
        {
          name: '是的',
          type: 'primary',
          iconClassName: 'icon-go-up',
          event: { name: 'isLoveA', params: 'always' }
        },
        {
          name: '超级爱',
          type: 'danger',
          iconClassName: 'icon-go-down',
          event: { name: 'isLoveB', params: ['furtrue', 'xixi'] }
        }
      ]
    }
  },
  methods: {
    loveA(params) {
      alert('I love whidy ' + params + '!')
      // console.log('I love whidy ' + param + '!')
    },
    loveB(params) {
      // 多参数情况以下写法是否合理? 有待研究
      alert(`I also love whidy in the ${params[0]}, ${params[1]}!`)
      // console.log(`I also love whidy in the ${params}!`)
      // console.log(`I also love whidy in the ${params[0]}, ${params[1]}!`)
    }
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 64px;
  width: 64px;
  line-height: 2;
  padding: 1em;
  margin: 1em auto;
  border: 1px dashed #999;
  word-break: break-all;
}
.tips {
  color: #999;
  font-size: 24px;
}
</style>
