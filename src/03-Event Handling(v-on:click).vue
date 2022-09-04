<template>
  <div>
    <p>Counter:{{ count }}</p>
    <!-- 1. 绑定事件
      语法：v-on:事件名="少量语法"
      语法：v-on:事件名="methods里函数名"
      语法：v-on:事件名="methods里函数名(值)"
      简写：@事件名="methods里函数名(值)"
     -->
    <button v-on:click="count++">+1</button>
    <button v-on:click="addFn">+1</button>
    <button v-on:click="addCountFn(5)">+5</button>
    <button @click="subFn(10)">-10</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  // 2. 定义函数
  methods: {
    addFn() {
      // this指向的export default的{}
      // data 函数会把对象挂到当前组件对象上
      this.count++
    },
    addCountFn(value) {
      this.count += value
    },
    subFn(value) {
      this.count -= value
    },
  },
}
</script>

<style></style>
