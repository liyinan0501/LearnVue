<template>
  <div>
    <!-- 
      .stop 阻止事件冒泡
      .prevent 阻止事件默认行为
      .once 只执行一次事件处理函数
     -->
    <div @click="fatherFn">
      <p @click.stop="sonFn">.Stop Propagation</p>
      <a @click.prevent.stop href="http://www.google.com">Google</a>
      <p @click.once="countFn">Counter</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fatherFn() {
      console.log('Father triggered')
    },
    sonFn() {
      console.log('Son Triggered')
    },
    countFn() {
      console.log('<p> Triggered')
    },
  },
}
</script>

<style></style>
