<template>
  <div>
    Root
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="revBtn">Reverse</button>
    <button @click="sliceBtn">Slice</button>
    <button @click="updateBtn">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6],
    }
  },
  methods: {
    revBtn() {
      // 1. 可以让v-for更新
      this.arr.reverse()
    },
    sliceBtn() {
      // 2. 不可以让v-for更新
      // this.arr.slice(0, 3)
      // 解决方案：替换原state
      this.arr = this.arr.slice(0, 3)
    },
    updateBtn() {
      // 3. 可以让v-for更新
      this.arr[0] = 100
      // this.$set(this.arr, 1, 100) 老版本
    },
    // 总结：调用方法后，如果原始数组本身变更了，就会触发v-for更新，也就是页面更新，相反不会触发更新。
    // 例如：(会触发更新的方法)
    // push()尾部添加, pop()尾部删除, unshift()头部添加, shift()头部删除, splice()删除添加某个或几个, sort(), reverse()
    // 例如：(不会会触发更新的方法)
    // slice(), filter(), concat(), map()
  },
}
</script>

<style></style>
