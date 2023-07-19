<template>
  <div class="todo_container">
    <div class="todo_create">
      <h3>CREATE TODO</h3>
      <div class="input_container">
        <input type="text" v-model="todoVal" />
        <button @click="createTodo()">CREATE</button>
      </div>

      <div class="sorting">
        <!-- <select name="" id="">
          <option value="" disabled>Sorting</option>
          <option value="asc" @click="sortAsc()">Ascending</option>
          <option value="desc">Descending</option>
        </select> -->
        <button @click="sortAsc()">Sort Asc</button>
        <button @click="sortDesc()">Sort Desc</button>
      </div>

      <div class="list_container">
        <li v-for="item in todoList" :key="item.id">
          <div v-if="item.isEditing" class="input_container">
            <input type="text" v-model="item.updatedTitle" />
            <button @click="updateTodo()">Update</button>
          </div>
          <div v-else class="data_container">
            {{ item.title }}
            <div class="todo_action_btns">
              <button @click="deleteTodo(item.id)">Delete</button>
              <button @click="editTodo(item)">Edit</button>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
export default {
  name: "Todo",
  components: {
    Header,
  },
  data() {
    return {
      todoVal: "",
      todoList: [],
    };
  },
  created() {
    this.getTodoList();
  },
  methods: {
    saveTodoList() {
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    },

    createTodo() {
      let newTodo = {
        id: Date.now(),
        title: this.todoVal,
      };
      this.todoList.push(newTodo);
      this.saveTodoList();
      this.todoVal = "";
    },

    deleteTodo(id) {
      this.todoList = this.todoList.filter((i) => i.id !== id);
      this.saveTodoList();
    },

    editTodo(item) {
      item.isEditing = true;
      item.updatedTitle = item.title;
    },

    updateTodo() {
      this.todoList.forEach((item) => {
        if (item.isEditing) {
          item.title = item.updatedTitle;
          item.isEditing = false;
        }
      });
      this.saveTodoList();
    },

    getTodoList() {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        this.todoList = JSON.parse(savedTodos);
      }
    },

    sortAsc() {
      return this.todoList.sort((a, b) => {
        return a.title < b.title ? -1 : 1;
      });
    },
    sortDesc() {
      return this.todoList.sort((a, b) => {
        return a.title < b.title ? 1 : -1;
      });
    },
  },
};
</script>

<style scoped>
.todo_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo_create {
  padding: 2rem;
  box-shadow: 0 0.1rem 0.3rem rgb(0, 0, 0, 0.2);
  margin-top: 3rem;
  max-width: 30rem;
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
.todo_action_btns button {
  padding: 0.5rem;
  border: none;
  border-radius: 0.1rem;
  color: aliceblue;
  margin: 0 0.5rem;
}
.todo_action_btns button:nth-child(1) {
  background-color: crimson;
}
.todo_action_btns button:nth-child(2) {
  background-color: green;
}
.sorting {
  margin-bottom: 2rem;
}
.sorting button {
  padding: 0.5rem;
  border: none;
  color: aliceblue;
  background-color: rgb(18, 29, 32);
  margin: 0 0.5rem;
}
</style>
