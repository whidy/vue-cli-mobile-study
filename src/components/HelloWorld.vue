<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-btn type="default">Vant默认按钮测试</my-btn>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'HelloWorld',
  components: {
    myBtn: Button
  },
  data() {
    return {
      msg: "Welcome to Whidy's Vue-cli study project!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
/* style block 2 */
.van-button {
  width: 50%;
  margin: 20px auto;
}
</style>
