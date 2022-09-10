<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <PannelComponent />
    <PannelComponent />
    <PannelComponent />
  </div>
</template>

<script>
// 1. 全局注册组件：
// main.js
// import 组件
// Vue.component('组件名'，组件对象)
// 2. 局部注册组件：
import PannelComponent from './components/PannelComponent.vue'
export default {
  components: {
    PannelComponent,
  },
}
</script>

<style lang="less" scoped>
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
