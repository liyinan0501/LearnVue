<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button @click="getAllFn">Click</button>

    <p>2. 查询模本书籍信息</p>
    <input type="text" placeholder="请输入要查询的书名" v-model="bookName" />
    <button @click="findFn">Search</button>

    <p>2. 新增图书信息</p>
    <div>
      <input type="text" placeholder="book name" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="author" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="publisher" v-model="bookObj.publisher" />
    </div>
    <button @click="sendFn">Add</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://123.57.109.30:3006";
export default {
  data() {
    return {
      bookName: "",
      bookObj: {
        bookname: "",
        author: "",
        publisher: "",
      },
    };
  },
  methods: {
    getAllFn() {
      axios({
        url: "/api/getbooks",
        method: "GET", // 默认就是GET方式请求，可以省略不写
      }).then((res) => {
        console.log(res);
      });
    },
    findFn() {
      axios({
        url: "/api/getbooks",
        method: "GET",
        params: {
          bookname: this.bookName,
        },
      }).then((res) => console.log(res));
    },
    sendFn() {
      axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          ...this.bookObj,
        },
      }).then((res) => console.log(res));
    },
  },
};
</script>

<style></style>
