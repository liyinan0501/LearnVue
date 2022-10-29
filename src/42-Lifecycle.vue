<template lang="">
  <div>
    <h1>Lifecycle:</h1>
    <Life v-if="isShow"></Life>
    <button @click="isShow = false">Destroy Lifecycle Component</button>
  </div>
</template>

<script>
import Life from "./components/LifeComponent.vue";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    Life,
  },
};
</script>

<style lang=""></style>
