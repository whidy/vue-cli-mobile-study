<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-btn type="default">{{userName}}</my-btn>
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
      msg: 'Welcome to Whidy\'s Vue-cli study project!',
      userName: ''
    }
  },
  created() {
    // this.axios.get('/user').then(response => {
    //   console.log(response.data)
    //   this.userName = response.data.user
    // })
    this.$ajax('/users').then(response => {
      console.log(response.data)
      // this.userName = response.data.user
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
/* 这是模版内的样式 */
.van-button {
  width: 50%;
  margin: 20px auto;
}
</style>
