/* 该组件作用于各种内部容器底部固定结构, 但是底部固定结构高度不确定的场景
目前已使用该组件的模板包括
*
* 该组件默认用户底部按钮, 需要传递的数据格式如下
  {
    name: '自定义', //customize
    type: 'primary', //'default', 'danger'
    iconClassName: 'icon-go-up', //customize 小图标自定义
    event: { name: 'isLoveA', params: 'always' } //event 传入一个自定义的配置好的简单的事件对象
  }
*
* 该demo从业务中抽离, 仅供学习测试
*/

<template>
  <div class="bottom-fixed van-hairline--top" id="bottomFixed">
    <slot name="content">
      <!-- 默认为菜单按钮 -->
      <div class="menu">
        <button v-for="(btn, i) in buttonList" :key="i" class="van-button van-button--normal" :class="'van-button--' + btn.type" @click="$emit(btn.event.name, btn.event.params)">
          <i class="iconfont" :class="btn.iconClassName"></i>
          <span class="van-button__text">{{btn.name}}</span>
        </button>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['buttonList'],
  mounted() {
    let bottomFixed = document.getElementById('bottomFixed')
    let bottomFixedHeight = bottomFixed.offsetHeight
    bottomFixed.parentNode.style.paddingBottom = bottomFixedHeight + 'px'
  }
}
</script>

<style lang="postcss" scoped>
// 底部fixed
.bottom-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
}
.menu {
  width: 100%;
  background-color: #fff;
  padding: 20px 0;
  display: flex;
  .van-button {
    flex: 1;
    margin: 0 15px;
  }
}
</style>

