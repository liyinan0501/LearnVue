<template>
  <div id="app">
    <div class="container">
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
            <td>{{ $filters.formatDate(item.time) }}</td>
            <td>
              <a href="#" @click="delFn(item.id)">删除</a>
            </td>
          </tr>
        </tbody>

        <tfoot v-show="list.length === 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
        <tr v-if="list.length !== 0" style="background-color: #eee">
          <td>统计:</td>
          <td colspan="2">总价: {{ allPrice }}</td>
          <td colspan="2">均价: {{ avgPrice }}</td>
        </tr>
      </table>

      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model.trim="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      price: 0,
      list: JSON.parse(localStorage.getItem('StoreList')) || [],
    }
  },
  methods: {
    addFn() {
      if (this.name.length == 0 || this.price === 0) {
        alert('Can not be empty')
        return
      }
      this.list.push({
        id: this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1,
        name: this.name,
        price: this.price,
        time: new Date(),
      })
    },
    delFn(id) {
      this.list = this.list.filter((item) => item.id != id)
    },
  },
  computed: {
    allPrice() {
      return this.list.reduce((sum, obj) => (sum += obj.price), 0)
    },
    avgPrice() {
      return (this.allPrice / this.list.length).toFixed(2)
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('StoreList', JSON.stringify(this.list))
      },
    },
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
