<template>
  <div>
    <p>1. Retrive DOM</p>
    <h1 id="h" ref="myH">Header One</h1>

    <p>2. Retrive Component</p>
    <Demo ref="de"></Demo>
  </div>
</template>

<script>
import Demo from "./components/demoComponent.vue";
export default {
  mounted() {
    console.log(document.getElementById("h"));
    console.log(this.$refs.myH);
    let demoObj = this.$refs.de;
    demoObj.fn();
  },
  components: {
    Demo,
  },
};
</script>

<style></style>
