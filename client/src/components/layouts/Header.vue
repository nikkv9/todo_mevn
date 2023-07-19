<template>
  <div class="container">
    <div class="left">
      <RouterLink to="/">Todo App</RouterLink>
    </div>
    <div class="right">
      <RouterLink to="/learning">Learning</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
      <RouterLink to="/signin">Signin</RouterLink>
      <RouterLink to="/signup">Signup</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "Header",
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  height: 3rem;
  width: 100%;
  position: sticky;
  top: 0;
}

.left a {
  font-size: 1.3rem;
  text-decoration: none;
  color: unset;
  margin: 0 1rem;
}
.right a {
  color: teal;
  margin: 0 1rem;
  font-size: 1.1rem;
}
</style>
