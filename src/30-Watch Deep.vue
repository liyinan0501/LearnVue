<template>
  <div>
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        age: 0,
      },
    }
  },
  watch: {
    user: {
      immediate: true, // 网页一载入，立刻启用监听。
      deep: true, //开始深度监听，简体对象里面的name和age属性。
      handler(newState, prevState) {
        console.log(prevState, newState)
      },
    },
  },
}
</script>

<style></style>
