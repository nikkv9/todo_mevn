<template>
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
</template>

<script>
export default {
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete_todo", id);
    },
    editTodo(item) {
      this.$emit("edit_todo", item);
    },
    updateTodo() {
      this.$emit("update_todo");
    },
  },
};
</script>

<style scoped>
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
