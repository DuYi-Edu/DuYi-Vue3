import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import provideStore from "./store";
const app = createApp(App).use(router);
provideStore(app); // 提供所有共享数据
app.mount("#app");
