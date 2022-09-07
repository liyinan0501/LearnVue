<template>
  <div>
    <!-- 
      :class="{类名: 布尔值}"
      使用场景：vue变量控制标签是否应该有类名
     -->
    <p :class="{ redStr: bool }">Dynamic ClassName</p>
    <!-- 
      :style="{css属性名: 值}"
      使用场景：
     -->
    <p :style="{ backgroundColor: bg }">Dynamic Style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
      bg: 'red',
    }
  },
}
</script>

<style>
.redStr {
  color: red;
}
</style>
