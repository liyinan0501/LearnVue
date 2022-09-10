<template>
  <div v-for="(item, index) in arr" :key="index" style="display: inline-block">
    <input type="checkbox" v-model="checkedIndex" :value="item" />
    <span>{{ item }}</span>
    &nbsp;
  </div>
  <h2>Total Selected Value: {{ total }}</h2>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      checkedIndex: [],
    }
  },
  computed: {
    total() {
      return this.checkedIndex.reduce((sum, item) => (sum += item), 0)
    },
  },
}
</script>

<style></style>
