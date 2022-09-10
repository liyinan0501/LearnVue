<template>
  <div class="app">
    <div>
      <form @submit.prevent="addEdit">
        <div>
          <label for="name">Name: </label>
          <input type="text" id="name" v-model.trim="newObj.name" />
        </div>
        <div>
          <label for="age">Age: </label>
          <input type="text" id="age" v-model.number="newObj.age" />
        </div>
        <div>
          <label for="gender">Gender: </label>
          <select name="gender" id="gender" v-model="newObj.gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <button>Edit/Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions:</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="list.length === 0">
            <td colspan="5" style="text-align: center">empty</td>
          </tr>
          <tr v-for="({ id, name, age, gender }, index) in list" :key="index">
            <td>{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ age }}</td>
            <td>{{ gender }}</td>
            <td>
              <button @click="del(index)">Delete</button>
              &nbsp;
              <button @click="showEdit(index)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      editIndex: null,
      newObj: {
        name: '',
        age: 0,
        gender: '',
      },
    }
  },
  methods: {
    addEdit() {
      if (this.editIndex !== null) {
        this.list[this.editIndex] = this.newObj
        this.editIndex = null
      } else {
        this.list.push(this.newObj)
      }
      this.newObj = {
        name: '',
        age: 0,
        gender: '',
      }
    },
    del(index) {
      this.list.splice(index, 1)
    },
    showEdit(index) {
      console.log(index)
      let editObj = this.list[index]
      this.newObj = { ...editObj }
      this.editIndex = index
    },
  },
}
</script>

<style>
.app {
  margin: 50px;
}
input {
  height: 25px;
}
form label {
  width: 70px;
}
form div {
  margin: 3px;
}

table th,
tbody td {
  border: 1px solid black;
  font-size: larger;
  padding: 10px;
}
</style>
