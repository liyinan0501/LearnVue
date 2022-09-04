<template>
  <div>
    <a @click="one" href="http://www.google.com">Google</a>
    <hr />
    <a @click="two(10, $event)" href="http://www.amazon.com">Amazon</a>
  </div>
</template>

<script>
export default {
  methods: {
    // 1. 时间触发，无传值，可以直接获取事件对象。
    one(event) {
      event.preventDefault()
    },
    // 2. 事件触发，传值，需要手动传入$event。
    two(num, event) {
      event.preventDefault()
    },
  },
}
</script>

<style></style>
