import loginUser from "./loginUser";
import { createStore, createLogger } from "vuex";
export default createStore({
  modules: {
    loginUser,
  },
  plugins: [createLogger()],
});
