<template>
  <div>
    <p>Results: {{ num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
    }
  },
  // 计算属性：
  // 场景：一个变量的值，需要用另外变量计算而来。
  // 注意：计算属性里和data属性里都是变量，data里和computed里变量不能重名。
  computed: {
    num() {
      return this.a + this.b
    },
  },
}
</script>

<style></style>
