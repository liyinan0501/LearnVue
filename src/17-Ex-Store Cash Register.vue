<template>
  <div class="root">
    <h1>VUE Store</h1>
    <table>
      <tr>
        <th><span>Apple 10€ / kg, -20%</span></th>
      </tr>
      <tr>
        <td>Buy(kg): <input type="number" v-model="amount" /></td>
      </tr>
      <tr>
        <td>
          <button @click="orderFn">Order</button>
        </td>
      </tr>
      <tr>
        <td>
          Total:{{ total }}€ After discount:{{ finalTotal }}€ Saving:{{ save }}€
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      total: 0,
      finalTotal: 0,
      save: 0,
    }
  },
  methods: {
    orderFn() {
      this.total = this.amount * 10
      this.finalTotal = this.amount * 10 * 0.8
      this.save = this.total - this.finalTotal
    },
  },
}
</script>

<style scoped>
.root {
  text-align: center;
}
table,
th,
td {
  border: 1px solid gray;
}
table {
  margin: auto;
  width: 700px;
}
</style>
