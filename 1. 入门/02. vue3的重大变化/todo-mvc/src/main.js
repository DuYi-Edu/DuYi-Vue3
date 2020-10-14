import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

//vue2
// const app = new Vue(options)
// Vue.use()
// app.$mount("#app")

//vue3
// 不存在构造函数Vue
// const app = createApp(App);
// app.mount("#app");
createApp(App).mount("#app");
