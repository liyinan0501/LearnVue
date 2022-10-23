<template>
  <div>
    <div>
      <span>Name: </span>
      <input type="text" v-model="full" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    full: {
      // 给 full 赋值触发 set 方法
      set(val) {
        console.log(val);
      },
      // 只要从 full 取值就触发 get 方法
      get() {
        return "None";
      },
    },
  },
};
</script>

<style></style>
