<template>
  <div>
    <p ref="p">Number: {{ count }}</p>
    <button @click="btn">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btn() {
      this.count++;
      // vue 检测数据更新，开启一个DOM更新队列（异步任务）
      console.log(this.$refs.p.innerHTML);

      // DOM 更新完会逐个触发$nextTick里的函数体。
      // 用箭头函数让this指向组件对象。
      this.$nextTick(() => {
        console.log("$nextTick: ", this.$refs.p.innerHTML);
      });
    },
  },
  updated() {
    console.log("updated: ", this.$refs.p.innerHTML);
  },
};
</script>

<style></style>
