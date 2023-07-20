<template>
  <div class="todo_container">
    <div class="todo_create">
      <h3>CREATE TODO</h3>
      <form class="input_container" @submit.prevent="createTodo()">
        <input
          type="text"
          v-model="todoVal"
          @click="handleInputClick('todoVal')"
        />
        <!-- <span v-if="inputClicked && errMsg['todoVal']" class="err_msg">{{
          errMsg["todoVal"]
        }}</span> -->

        <!-- <input type="text" v-model="name" @click="handleInputClick('name')" />
        <span v-if="inputClicked && errMsg['name']" class="err_msg">{{
          errMsg["name"]
        }}</span> -->
        <button type="submit">CREATE</button>
      </form>
    </div>

    <div class="todo_table_container">
      <h2>Todo-Lists</h2>
      <div class="sorting">
        <select v-model="sortOption">
          <option value="" disabled>Sorting</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <!-- <div class="searching">
        <input type="text" placeholder="Search item..." v-model="searchTerm" />
        <ul class="list_container">
          <li v-for="item in filteredList" :key="item.id">{{ item.title }}</li>
        </ul>
      </div> -->
      <TodoTable
        :todos="todoList"
        @delete_todo="deleteTodo"
        @edit_todo="editTodo"
        @update_todo="updateTodo"
      />
    </div>

    <!-- <div>
      <input type="text" v-model="searchTerm" placeholder="Search item..." />
      <ul class="list_container">
        <li v-for="item in filteredList" :key="item.id">
          <div v-if="item.isEditing" class="input_container">
            <input type="text" v-model="item.updatedTitle" />
            <button @click="updateTodo(item._id)">Update</button>
          </div>
          <div v-else class="data_container">
            {{ item.title }}
            <div class="todo_action_btns">
              <button @click="deleteTodo(item._id)">Delete</button>
              <button @click="editTodo(item)">Edit</button>
            </div>
          </div>
        </li>
      </ul>
    </div> -->
    <ToastifyContainer autoClose="1000" />
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
import TodoTable from "./TodoTable.vue";
import axios from "axios";
import { base_url } from "../../api/api";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Todo",
  components: {
    Header,
    TodoTable,
  },

  data() {
    return {
      todoVal: "",
      name: "",
      todoList: [],
      sortOption: "",
      errMsg: {},
      inputClicked: false,
      searchTerm: "",
    };
  },
  created() {
    this.getTodoList();
  },

  computed: {
    filteredList() {
      return this.todoList.filter((item) =>
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },

  methods: {
    handleInputClick(fieldName) {
      this.inputClicked = fieldName;
      if (!this[fieldName].trim()) {
        this.errMsg[fieldName] = "This field is required!";
      } else {
        this.errMsg[fieldName] = "";
      }
    },

    async getTodoList() {
      try {
        const { data } = await axios.get(`${base_url}/todo/all`);
        this.todoList = data;
      } catch (error) {
        console.log(error);
      }
    },

    async createTodo() {
      try {
        if (!this.todoVal) {
          return toast.error("Please add data!");
        }
        const { data } = await axios.post(`${base_url}/todo/create`, {
          title: this.todoVal,
        });
        this.todoList.push(data);
        this.todoVal = "";
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTodo(id) {
      try {
        await axios.delete(`${base_url}/todo/${id}`);
        // console.log("Todo has been deleted!!");
        this.todoList = this.todoList.filter((i) => i._id !== id);
      } catch (error) {
        console.log(error.message);
      }
    },

    editTodo(item) {
      item.isEditing = true;
      item.updatedTitle = item.title;
    },

    async updateTodo(id) {
      try {
        const item = this.todoList.find((item) => item._id === id);
        const { data } = await axios.put(`${base_url}/todo/${id}`, {
          title: item.updatedTitle,
        });
        item.isEditing = false;
        item.title = item.updatedTitle;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    sortAsc() {
      return this.todoList.sort((a, b) => {
        return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
      });
    },
    sortDesc() {
      return this.todoList.sort((a, b) => {
        return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
      });
    },
  },

  watch: {
    sortOption(opt) {
      if (opt === "asc") {
        this.sortAsc();
      } else if (opt === "desc") {
        this.sortDesc();
      }
    },
  },
};
</script>

<style scoped>
.todo_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.todo_create {
  margin-top: 1rem;
}
.todo_create h3 {
  text-align: center;
}
.input_container {
  margin: 2rem 0;
}
.input_container input {
  padding: 0.5rem;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 0.1rem;
}
.input_container button {
  padding: 0.5rem 1rem;
  background-color: teal;
  color: aliceblue;
  border: none;
  margin: 0 1rem;
}
.list_container li {
  list-style: none;
}
.data_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 1rem auto;
}

.sorting {
  width: 10rem;
  margin: 1rem auto;
}
.sorting select {
  padding: 0.5rem;
  background-color: white;
  width: 100%;
  outline: none;
  border: 1px solid lightgray;
}
.todo_table_container {
  width: 100%;
}
.todo_table_container h2 {
  text-align: center;
  background-color: rgb(7, 49, 49);
  padding: 0.5rem 0;
  color: aliceblue;
}
</style>
