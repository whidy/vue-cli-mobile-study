<template>
  <div class="button-bar">
    <div class="button-bar-wrapper">
      <button v-for="(btn, i) in buttonList" :key="i" class="btn" @click="$emit(btn.eve)">{{btn.title}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button-bar',
  props: ['buttonList'],
  data() {
    return {
    }
  }
}
</script>
<style lang="postcss" scoped>
.button-bar {
  padding: 20px 0;
  width: 100%;
  background-color: #fff;
  .button-bar-wrapper {
    display:flex;
  }
  .btn {
    flex:1;
    border: 1px solid #eee;;
    margin: 0 20px;
    background-color: #fff;
    font-size:24px;
    line-height: 40px;
    border-radius: 5px;
  }
}
</style>
