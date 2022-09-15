<template>
  <div>
    <!-- 
      Parent To Child Communication
      目标：父 App.vue -> 子 MyProduct.vue
      步骤：
      1. 在子组件内用props:[]定义变量。
      2. 
     -->
    <Product title="Chicken" price="50" intro="Good Value"></Product>
    <Product title="Beef" price="80" intro="Special Taste"></Product>
    <Product title="Duck" price="199" :intro="des"></Product>
  </div>
</template>

<script>
import Product from './components/MyProduct.vue'
export default {
  data() {
    return {
      des: 'High Price!!!',
    }
  },
  components: {
    Product,
  },
}
</script>

<style></style>
