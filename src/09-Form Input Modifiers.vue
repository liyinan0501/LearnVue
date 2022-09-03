<template>
  <div>
    <div>
      <!-- .number: 用parseFloat转数值在赋予给v-model对应的变量。 -->
      <!-- .number 修饰符会在输入框有 type="number" 时自动启用。 -->
      <span>Age: </span>
      <input type="number" v-model.number="age" />
    </div>

    <div>
      <!-- .trim: 去除首尾两边空格。 -->
      <span>Bio: </span>
      <input type="text" v-model.trim="bio" />
    </div>

    <div>
      <!-- .lazy: 失去焦点内容改变时，把内容同步给v-model的变量。(原理：把oninput切换成onchange) -->
      <span>Intro: </span>
      <textarea v-model.lazy="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
      bio: '',
      intro: '',
    }
  },
}
</script>

<style></style>
