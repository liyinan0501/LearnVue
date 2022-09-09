<template>
  <div>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  // 监听 name 值的改变
  watch: {
    name(newState, prevState) {
      console.log(prevState, newState)
    },
  },
}
</script>

<style></style>
