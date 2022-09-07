<template>
  <div>
    <p>Origin: {{ msg }}</p>
    <p>Global Filtered: {{ $filters.reverse(msg) }}</p>
    <p>Local Filtered: {{ reverseFilter }}</p>

    <p :title="toUp">Mouse Keep Hover</p>
  </div>
</template>

<script>
// 过滤器

// 方式1：全局过滤器 main.js
// 任意的 .vue文件内可直接使用。
// 定义:
// app.config.globalProperties.$filters = { 过滤器名(要过滤的值) {return '过滤后结果'} }
// 使用:
// {{ $filters.过滤器名(要过滤的值) }}

// 方式2：局部过滤器
// 定义:
// computed: { 过滤器名() {return '过滤后结果'} }
// 使用:
// {{ 过滤器名 }}
export default {
  data() {
    return {
      msg: 'hello, Vue',
    }
  },
  computed: {
    reverseFilter() {
      return this.msg.split('').reverse().join('')
    },
    toUp() {
      return this.msg.toUpperCase()
    },
  },
}
</script>

<style></style>
