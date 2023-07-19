<template>
  <div class="home_container">
    <div class="msg">
      <div class="msg_container">
        <h2>Welcome to Vue js</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style scoped>
.home_container {
  height: calc(100vh - 3rem);
}
.msg {
  display: flex;
  justify-content: center;
  align-items: center;
}
.msg_container {
  padding: 2rem;
  min-height: 10rem;
  min-width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  margin-top: 5rem;
  border: 1px solid teal;
}
.msg_container h2 {
  color: rgb(3, 21, 37);
}
</style>
