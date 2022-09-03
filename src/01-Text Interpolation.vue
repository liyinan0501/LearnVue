<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ obj.name }}</h1>
    <h1>{{ obj.age >= 18 ? 'Adult' : 'Under age' }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello vue',
      obj: {
        name: 'Tom',
        age: 5,
      },
    }
  },
}
</script>

<style></style>
