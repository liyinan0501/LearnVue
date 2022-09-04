<template>
  <div>
    <!-- 
      遍历数组：
      v-for="(值的变量名, 索引变量名) in 目标结构"
     -->
    <p>学生姓名</p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ index }}--{{ item }}</li>
    </ul>

    <!-- 
      遍历数组对象：
      v-for="(值的变量名) in 目标结构"
     -->
    <p>学生详细信息</p>
    <ul>
      <li v-for="obj in stuArr" :key="obj.id">
        <span>{{ obj.name }}</span>
        <span>{{ obj.sex }}</span>
        <span>{{ obj.hobby }}</span>
      </li>
    </ul>

    <!-- 
      遍历对象：
       v-for="(value, key) in 对象"
     -->
    <p>老师信息</p>
    <div>
      <p v-for="(value, key) in tObj" :key="key">
        <span>{{ key }}</span>
        :
        <span>{{ value }}</span>
      </p>
    </div>

    <!-- 
      遍历整数：
      v-for="变量名 in 数字"
      从1开始遍历
      -->
    <div v-for="n in count" :key="n">{{ n }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['小明', '小欢欢', '大黄'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      count: 10,
    }
  },
}
</script>

<style></style>
