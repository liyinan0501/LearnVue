<template>
  <div>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, Vue',
    }
  },
  // 计算属性有事：
  // 带缓存
  // 计算属性对应函数执行后，会把return的值缓存起来。
  // 如果依赖项不变，多次调用都是从缓存取值。
  // 如果依赖项值变化，函数会自动重新执行，并缓存新的值。
  computed: {
    reverseMessage() {
      console.log('Computed')
      return this.msg.split('').reverse().join('')
    },
  },
  methods: {
    getMessage() {
      console.log('Function')
      return this.msg.split('').reverse().join('')
    },
  },
}
</script>

<style></style>
