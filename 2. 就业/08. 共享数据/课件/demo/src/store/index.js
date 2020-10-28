import { createStore, createLogger } from "vuex";
import loginUser from "./loginUser";
export default createStore({
  modules: {
    loginUser,
  },
  plugins: [createLogger()],
});
