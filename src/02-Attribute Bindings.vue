<template>
  <div>
    <!-- 2. 值赋到标签原生属性上 -->
    <!-- 语法：v-bind：元素属性名=’vue变量‘ -->
    <a v-bind:href="url">Google</a>
    <!-- 语法：:原生属性名=‘vue变量’ -->
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script>
export default {
  // 1. 准备变量
  data() {
    return {
      url: 'http://www.google.com',
      imgUrl:
        'https://lh3.googleusercontent.com/kAZ1sus40lc5iN_9XX0EhJQLuqHMamLAl2Nenf_jSKS9pwdb1mZyVg8FMmdAfw0_RE4=w800-h500',
    }
  },
}
</script>

<style></style>
