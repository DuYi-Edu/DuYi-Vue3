<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <span v-if="loginUserStore.loading">loading...</span>
    <template v-else-if="loginUserStore.user">
      <span>{{ loginUserStore.user.name }}</span>
      <a class="ml-5" href="" @click.prevent="handleLoginOut">退出</a>
    </template>
    <router-link v-else to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<script>
import { loginOut, loginUserStore } from "./store/useLoginUser";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const handleLoginOut = async () => {
      await loginOut();
      router.push("/login");
    };
    return {
      handleLoginOut,
      loginUserStore,
    };
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .ml-5 {
  margin-left: 5px;
}
</style>
