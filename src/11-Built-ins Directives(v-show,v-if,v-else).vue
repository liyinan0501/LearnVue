<template>
  <div>
    <!-- 
      v-show 或 v-if 控制隐藏
      * v-show='vue变量'
          用display:none来隐藏。(适合频繁切换使用)
      * v-if='vue变量'
          直接从DOM树上移除。
     -->
    <h1 v-show="isShow">v-show Box</h1>
    <h1 v-if="isOk">v-if Box</h1>

    <!-- v-if 和 v-else -->
    <p v-if="age >= 18">Adult</p>
    <p v-else>Minor</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isOk: false,
      age: 20,
    }
  },
}
</script>

<style></style>
