import * as userServ from "../api/user";
export default {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async login({ commit }, { loginId, loginPwd }) {
      commit("setLoading", true);
      const user = await userServ.login(loginId, loginPwd);
      commit("setUser", user);
      commit("setLoading", false);
      return user;
    },
    async loginOut({ commit }) {
      commit("setLoading", true);
      await userServ.loginOut();
      commit("setUser", null);
      commit("setLoading", false);
    },
    async whoAmI({ commit }) {
      commit("setLoading", true);
      const user = await userServ.whoAmI();
      commit("setUser", user);
      commit("setLoading", false);
    },
  },
};
