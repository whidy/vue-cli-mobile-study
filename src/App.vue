<template>
  <div id="app" class="app">
    <img src="./assets/logo.png">
    <div class="counter">
      <p>{{ counter }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
      <p>
        <button @click="clear">清除store.state</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
    clear() {
      window.sessionStorage.clear()
      this.$store.replaceState({})
      window.location.reload('/')
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter
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
</style>
