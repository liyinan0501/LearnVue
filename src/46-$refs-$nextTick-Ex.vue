<template>
  <div>
    <input type="text" placeholder="input..." v-if="isShow" ref="myInput" />
    <button v-else @click="btn">Search</button>
  </div>
</template>

<script>
// 目标：点按钮->消失->输入框出现并聚焦
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    async btn() {
      this.isShow = true;
      // this.$refs.myInput.focus()
      // 报错:undefined
      // 原因：data变化更新DOM是异步的，输入框还没有挂载到真实的DOM上。
      // 解决1：
      // this.$nextTick(() => {
      //   this.$refs.myInput.focus();
      // });
      // $nextTick()返回的是Promise对象，可以和await配合使用。
      // 解决2：
      await this.$nextTick();
      this.$refs.myInput.focus();
    },
  },
};
</script>

<style></style>
