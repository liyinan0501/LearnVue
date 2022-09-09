<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="allChecked" />
    <button @click="invertFn">反选</button>
    <ul>
      <li v-for="item in arr" :key="item.name">
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '猪八戒',
          c: false,
        },
        {
          name: '孙悟空',
          c: false,
        },
        {
          name: '唐僧',
          c: false,
        },
        {
          name: '白龙马',
          c: false,
        },
      ],
    }
  },
  methods: {
    invertFn() {
      this.arr.forEach((obj) => (obj.c = !obj.c))
    },
  },
  computed: {
    allChecked: {
      set(val) {
        this.arr.forEach((obj) => (obj.c = val))
      },
      get() {
        return this.arr.every((obj) => obj.c == true)
      },
    },
  },
}
</script>
