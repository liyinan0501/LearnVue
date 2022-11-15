<template>
  <div>
    <ComNameHaHa></ComNameHaHa>
  </div>
</template>

<script>
import Com from "./components/nameComponent.vue";
export default {
  components: {
    [Com.name]: Com,
  },
};
</script>

<style></style>
