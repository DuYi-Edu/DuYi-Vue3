import { reactive, readonly } from "vue";
import * as userServ from "../api/user"; // 导入api模块
// 创建默认的全局单例响应式数据，仅供该模块内部使用
const state = reactive({ user: null, loading: false });

// 对外暴露的数据是只读的，不能直接修改
// 也可以进一步使用toRefs进行封装，从而避免解构或展开后响应式丢失
export const loginUserStore = readonly(state);

// 登录
export async function login(loginId, loginPwd) {
  state.loading = true;
  const user = await userServ.login(loginId, loginPwd);
  state.user = user;
  state.loading = false;
}
// 退出
export async function loginOut() {
  state.loading = true;
  await userServ.loginOut();
  state.loading = false;
  state.user = null;
}
// 恢复登录状态
export async function whoAmI() {
  state.loading = true;
  const user = await userServ.whoAmI();
  state.loading = false;
  state.user = user;
}
