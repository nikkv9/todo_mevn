import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/Home.vue";
// import Todo from "../components/todo/Todo.vue";
// import Todo1 from "../components/todo/Todo1.vue";
import Todo from "../components/todo/Todo.vue";
import Learning from "../components/Learning/Learning.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/todo",
    //   name: "todo",
    //   component: Todo,
    // },
    // {
    //   path: "/todo",
    //   name: "todo",
    //   component: Todo1,
    // },
    {
      path: "/todo",
      name: "todo",
      component: Todo,
    },
    {
      path: "/learning",
      name: "learning",
      component: Learning,
    },
  ],
});

export default router;
