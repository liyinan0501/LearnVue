<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
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
          <!-- 2. 显示默认数据 -->
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <!-- 3. 修改价格颜色 -->
            <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
            <td>{{ item.time }}</td>
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
      </table>

      <!-- 添加资产 -->
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
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 1. 下载bootstrap, main.js 引入 bootstrap.css

export default {
  data() {
    return {
      name: '',
      price: 0,
      list: [
        { id: 100, name: '外套', price: 199, time: new Date('2010-08-12') },
        { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
        { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') },
      ],
    }
  },
  methods: {
    // 4. 添加功能
    addFn() {
      if (this.name.length == 0 || this.price === 0) {
        alert('Can not be empty')
        return
      }
      this.list.push({
        // 6. 全部删除后添加的bug
        id: this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 0,
        name: this.name,
        price: this.price,
        time: new Date(),
      })
    },

    // 5. 删除功能
    delFn(id) {
      this.list = this.list.filter((item) => item.id != id)
    },
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
