import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { whoAmI } from "./store/useLoginUser";
createApp(App).use(router).mount("#app");

whoAmI();
