<template>
  <div>123</div>
  <p id="myP">{{ msg }}</p>
  <ul id="myUL">
    <li v-for="(val, index) in arr" :key="index">{{ val }}</li>
  </ul>
  <button @click="arr.push(1000)">Add</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello, vue.",
      arr: [5, 8, 2, 1],
      timer: null,
    };
  },
  // 一. 初始化 vue 实例
  // beforeCreate():
  // 初始化，实例创建、添加data和methods之前。
  // 场景：beforeCreate 很少使用。
  beforeCreate() {
    console.log("beforeCreate -- execute");
    console.log(this.msg); // undefined
  },
  // created():
  // data 和 methods 初始化之后，能获取data，不能获取真实DOM。
  // 场景：网络请求，注册全局事件。
  created() {
    console.log("created -- execute");
    console.log(this.msg); // hello, vue

    this.timer = setInterval(() => {
      console.log("TimerInterval executing");
    }, 1000);
  },

  // 二. 挂载
  // beforeMount():
  // 真实DOM挂载之前
  // 场景：预处理data，不会触发updated钩子函数。
  beforeMount() {
    console.log("beforeMount -- execute");
    console.log(document.getElementById("myP")); // null

    // 预处理data
    this.msg = "new data";
  },
  // mounted():
  // 真实DOM挂载之后
  // 场景：获取挂载后真实DOM。
  mounted() {
    console.log("mounted -- execute");
    console.log(document.getElementById("myP")); // <p id="myP">hello, vue.</p>
  },

  // 三. 更新
  // beforeUpdate():
  // 前提：data数据改变才执行
  // 数据更新之前
  beforeUpdate() {
    console.log("beforeUpdate -- execute");
    console.log(document.querySelectorAll("#myUL>li")[4]); // undefined
  },
  // updated():
  // 数据更新之后
  // 场景：获取数据更新后的真实DOM
  updated() {
    console.log("updated -- execute");
    console.log(document.querySelectorAll("#myUL>li")[4]); // <li>"1000"</li>
  },

  // 四. 销毁
  // beforeUnmount():
  // 前提: v-if='false' 销毁vue实例。
  // 拆除数据监视器、子组件和时间监听器。
  // 场景：移除全局事件，移除当前组件，计时器，定时器，eventBus移除时间$off方法。
  beforeUnmount() {
    console.log("beforeUnmount -- execute");

    // 移除定时器，否则占用全局资源还会执行timeInterval。
    clearInterval(this.timer);
  },
  // unmounted():
  // 实例销毁后，触发。
  unmounted() {
    console.log("unmounted -- execute");
  },
};
</script>

<style></style>
