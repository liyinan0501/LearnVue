<template>
  <div>
    <ul>
      <!-- diff 算法是一层层比较，而且尽量复用老虚拟DOM的标签。
        根元素改变 - 删除当前 DOM 数重新构建。
        根元素未变，属性改变 - 更新属性。
        根元素未变，子元素/内容改变 - 
          无key: 尝试就地更新。
          有key: 根据 key 属性里的值，进行新旧虚拟DOM的比较，进行更新。
      -->

      <!-- key 属性里的值只能是：唯一不重复的字符串或数字 -->
      <!-- key 好处：有 id 直接插入dom，提高更新性能。 -->
      <!-- key 用法：有id用id，无 id 用索引。 -->

      <li v-for="obj in arr" :key="obj.id">
        {{ obj.name }}
        <input type="text" />
      </li>
    </ul>
    <button @click="btn">ADD</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '老大',
          id: 50,
        },
        {
          name: '老二',
          id: 31,
        },
        {
          name: '老三',
          id: 10,
        },
      ],
    }
  },
  methods: {
    btn() {
      this.arr.splice(1, 0, { id: 19, name: '新来的' })
    },
  },
}
</script>

<style></style>
