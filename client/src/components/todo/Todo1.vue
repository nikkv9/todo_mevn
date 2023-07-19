<template>
  <div class="todo_container">
    <div class="todo_create">
      <h3>CREATE TODO</h3>
      <div class="input_container">
        <input type="text" v-model="todoVal" />
        <button @click="createTodo()">CREATE</button>
      </div>

      <TodoList
        :todoList="todoList"
        @delete_todo="deleteTodo"
        @edit_todo="editTodo"
        @update_todo="updateTodo"
      />
    </div>
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "Todo1",
  components: {
    Header,
    TodoList,
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
</style>
