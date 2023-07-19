<script>
import { RouterView } from "vue-router";
import Header from "./components/layouts/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
}
</style>
