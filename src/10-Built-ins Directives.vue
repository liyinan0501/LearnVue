<template>
  <div>
    <!-- <span>This is a SPAN tag.</span> -->
    <p v-text="str"></p>
    <!-- This is a SPAN tag. -->
    <p v-html="str"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '<span>This is a SPAN tag.</span>',
    }
  },
}
</script>

<style></style>
