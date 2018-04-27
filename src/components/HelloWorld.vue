<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-btn type="default" @click="getFriends">Get {{userName}}'s Friends</my-btn>
    <ul>
      <li v-for="(user, index) in userList" :key="index">{{user.userName}}</li>
    </ul>
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
      msg: "Welcome to Whidy's Vue-cli study project!",
      userName: '',
      userList: []
    }
  },
  methods: {
    getFriends() {
      this.$ajax('/users', { maxCount: 5 }).then(response => {
        console.log(response.data.list)
        this.userList = response.data.list
      })
    }
  },
  created() {
    this.$ajax('/user').then(response => {
      this.userName = response.data.user
    })
  }
}
</script>

<style scoped lang="postcss">
.van-button {
  width: 50%;
  margin: 20px auto;
}
</style>
