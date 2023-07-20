<template>
  <div class="todo_table">
    <ul class="list_container list_container1">
      <li>Title</li>
      <li>Actions</li>
    </ul>

    <ul
      class="list_container list_container2"
      v-for="item in todos"
      :key="item._id"
    >
      <div v-if="item.isEditing" class="input_container">
        <input type="text" v-model="item.updatedTitle" />
        <button @click="updateTodo(item._id)">Update</button>
        <img
          src="../../assets/remove_icon.svg"
          alt=""
          @click="item.isEditing = false"
        />
      </div>
      <li :class="{ hideData: item.isEditing }">
        {{ item.title }}
      </li>

      <div
        :class="{
          hideData: item.isEditing === true,
          list_actions: item.isEditing !== true,
        }"
      >
        <button @click="deleteTodo(item._id)">Delete</button>
        <button @click="editTodo(item)">Edit</button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoTable",
  props: {
    todos: Array,
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete_todo", id);
    },
    editTodo(item) {
      this.$emit("edit_todo", item);
    },
    updateTodo(id) {
      this.$emit("update_todo", id);
    },
  },
};
</script>

<style scoped>
.hideData {
  display: none;
}
.todo_table {
  width: 50%;
  margin: 0 auto;
  border: 1px solid lightgray;
}
.list_container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  padding-bottom: 0.5rem;
}
.list_container li {
  list-style: none;
  width: 20rem;
  text-align: center;
}
.list_container1 li {
  font-size: 1.1rem;
  font-weight: bold;
}
.list_actions {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
}
.list_actions button {
  padding: 0.5rem;
  border: none;
  border-radius: 0.1rem;
  color: aliceblue;
  margin: 0 0.5rem;
  cursor: pointer;
}
.list_actions button:nth-child(1) {
  background-color: crimson;
}
.list_actions button:nth-child(2) {
  background-color: green;
}
.input_container {
  width: 100%;
  display: flex;
  justify-content: center;
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
