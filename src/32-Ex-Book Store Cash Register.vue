<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul v-for="({ name }, index) in arr" :key="name">
      <li>{{ name }}</li>
      <button @click="buyFn(index)">Buy</button>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>

      <tr v-for="(obj, index) in arr" :key="obj.name">
        <td>{{ index + 1 }}</td>
        <td>{{ obj.name }}</td>
        <td>{{ obj.price }}</td>
        <td>{{ obj.count }}</td>
        <td>{{ obj.count * obj.price }}</td>
      </tr>
    </table>
    <p>总价格为:{{ getTotal }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '水浒传',
          price: 107,
          count: 0,
        },
        {
          name: '西游记',
          price: 192,
          count: 0,
        },
        {
          name: '三国演义',
          price: 219,
          count: 0,
        },
        {
          name: '红楼梦',
          price: 178,
          count: 0,
        },
      ],
    }
  },
  methods: {
    buyFn(index) {
      this.arr[index].count += 1
    },
  },
  computed: {
    getTotal() {
      return this.arr.reduce((sum, obj) => (sum += obj.price * obj.count), 0)
    },
  },
}
</script>
