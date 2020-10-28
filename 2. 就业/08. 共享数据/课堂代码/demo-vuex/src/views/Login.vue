<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginId" />
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" v-model="loginPwd" />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loading">{{ loading ? "loading..." : "登录" }}</button>
    </div>
  </form>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const loginId = ref("");
    const loginPwd = ref("");
    const store = useStore();
    const router = useRouter();
    const handleSubmit = async () => {
      const user = await store.dispatch("loginUser/login", {
        loginId: loginId.value,
        loginPwd: loginPwd.value,
      });
      if (user) {
        router.push("/"); // 登录成功
      } else {
        alert("账号/密码错误");
      }
    };
    return {
      loginId,
      loginPwd,
      handleSubmit,
      loading: computed(() => store.state.loginUser.loading),
    };
  },
};
</script>
<style scoped>
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  align-items: center;
}
.form-item input {
  height: 26px;
  font-size: 14px;
  flex: 1 1 auto;
}
.form-item label {
  width: 70px;
}
.form-item button {
  flex: 1 1 auto;
  background: #50936c;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  height: 35px;
  font-size: 16px;
}
</style>
