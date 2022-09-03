<template>
  <div>
    <!-- 1. v-model
      双向数据绑定 -> value属性和vue变量
     -->
    <div>
      <span>Username: </span>
      <input type="text" v-model="username" />
    </div>
    <div>
      <span>Password: </span>
      <input type="password" v-model="password" />
    </div>

    <div>
      <span>City: </span>
      <select v-model="city">
        <option value="helsinki">Helsinki</option>
        <option value="turku">Turku</option>
        <option value="tampere">Tampere</option>
      </select>
    </div>

    <div>
      <!-- Important
        遇到复选框，如果 v-model的变量值是：
        非数组：关联的是复选框的checked属性
        数组：关联的是复选框的value属性
       -->
      <span>Hobby: </span>
      <input type="checkbox" value="basketball" v-model="hobby" />Basketball
      <input type="checkbox" value="football" v-model="hobby" /> Football
      <input type="checkbox" value="volleyball" v-model="hobby" /> Volleyball
    </div>

    <div>
      <span>Gender: </span>
      <input type="radio" value="male" name="sex" v-model="gender" />Male
      <input type="radio" value="female" name="sex" v-model="gender" />Female
    </div>

    <div>
      <span>Description: </span>
      <textarea v-model="desc"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      city: '',
      hobby: [],
      gender: '',
      desc: '',
    }
  },
}
</script>

<style></style>
