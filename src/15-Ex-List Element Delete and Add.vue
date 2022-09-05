<template>
  <div>
    <ul v-for="(item, index) in arr" :key="index">
      <li>
        <span>{{ item }}</span>
        <button @click="delFn(index)">Delete</button>
      </li>
    </ul>
    <button @click="addFn">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    }
  },
  methods: {
    delFn(index) {
      this.arr.splice(index, 1)
    },
    addFn() {
      this.arr.push(Math.floor(Math.random() * 20))
    },
  },
}
</script>

<style></style>
