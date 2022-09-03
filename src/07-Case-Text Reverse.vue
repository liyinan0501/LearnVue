<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="reverseFn">Reverse</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, World',
    }
  },
  methods: {
    reverseFn() {
      let arr = this.msg.split('')
      this.msg = arr.reverse().join('')
    },
  },
}
</script>

<style></style>
