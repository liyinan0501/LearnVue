<template>
  <div class="app">
    <div>
      <form @submit.prevent="addEdit">
        <div>
          <label for="name">Name: </label>
          <input type="text" id="name" v-model.trim="name" />
        </div>
        <div>
          <label for="age">Age: </label>
          <input type="text" id="age" v-model.number="age" />
        </div>
        <div>
          <label for="gender">Gender: </label>
          <select name="gender" id="gender" v-model="gender">
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
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <button @click="del(item.id)">Delete</button>
              &nbsp;
              <button @click="showEdit(item.id)">Edit</button>
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
      name: '',
      age: 0,
      gender: '',
      id: 0,
    }
  },
  methods: {
    addEdit() {
      if (!this.name || !this.gender || this.age === 0) {
        alert('Can not empty')
        return
      }
      if (!this.id == 0) {
        this.list.forEach((item) => {
          if (item.id === this.id) {
            item.name = this.name
            item.age = this.age
            item.gender = this.gender
          }
        })
      } else {
        this.list.push({
          id: this.list.length + 1,
          name: this.name,
          age: this.age,
          gender: this.gender,
        })
      }
      this.name = this.gender = ''
      this.age = 0
    },
    del(id) {
      this.list = this.list.filter((item) => item.id != id)
    },
    showEdit(id) {
      this.list.forEach((item) => {
        if (item.id == id) {
          this.id = id
          this.name = item.name
          this.age = item.age
          this.gender = item.gender
        }
      })
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
