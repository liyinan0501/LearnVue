<template>
  <div>
    <!-- 1. 绑定键盘按下事件 -->
    <!-- 回车键 -->
    <input type="text" @keydown.enter="enterFn" />
    <hr />
    <!-- 退出键 -->
    <input type="text" @keydown.esc="escFn" />
  </div>
</template>

<script>
export default {
  methods: {
    enterFn() {
      console.log('Enter Triggered')
    },
    escFn() {
      console.log('Esc Triggered')
    },
  },
}
</script>

<style></style>
