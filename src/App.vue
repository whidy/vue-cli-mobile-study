<template>
  <div id="app" class="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button-bar :buttonList="buttonList1" @event-btn-a="clickBtnA" @event-btn-b="clickBtnB"></button-bar>
    <button-bar :buttonList="buttonList2" @event-btn-c="clickBtnC"></button-bar>
  </div>
</template>

<script>
import buttonBar from './components/buttonBar'

export default {
  name: 'App',
  components: {
    'button-bar': buttonBar
  },
  data() {
    return {
      buttonList1: [{ title: '按钮A', eve: 'event-btn-a' }, { title: '按钮B', eve: 'event-btn-b' }],
      buttonList2: [{ title: '按钮C', eve: 'event-btn-c' }]
    }
  },
  methods: {
    clickBtnA() {
      console.log('clickBtnA')
    },
    clickBtnB() {
      console.log('clickBtnB')
    },
    clickBtnC() {
      console.log('clickBtnC')
    }
  },
  created() {
    console.log('created')
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
</style>
