import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// https://next.router.vuejs.org/guide/migration/
export default createRouter({
  history: createWebHistory(), // mode:"history"
  routes,
});
