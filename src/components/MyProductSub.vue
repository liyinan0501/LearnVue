<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <!-- <button @click="subFn">Cut -1</button> -->
    <button @click="subFn">Cut -1</button>
  </div>
</template>

<script>
import emitter from '@/EventBus'
export default {
  props: ['index', 'title', 'price', 'intro'],
  methods: {
    // 错误：
    // subFn() {
    //   1. 子组件改父传入的数据不通知父亲 -> 数据不一致
    //   2. vue规定props 本身是只读的，不允许重新赋值
    //   this.price = this.price - 1
    // },
    // 2. this.$emit() - 主动触发事件
    // subFn() {
    //   this.$emit('subprice', this.index, 1)
    // },
    subFn() {
      emitter.emit('send', this.price)
      this.$emit('subprice', this.index, 1)
    },
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
