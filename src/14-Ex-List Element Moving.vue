<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <button @click="moveFn">Move</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['man', 'woman', 'coder'],
    }
  },
  methods: {
    moveFn() {
      this.list.push(this.list.shift())
    },
  },
}
</script>

<style></style>
