import { getAsyncPage } from "../util";

export default [
  {
    path: "/",
    name: "Home",
    component: getAsyncPage("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: getAsyncPage("../views/About.vue"),
  },
];
