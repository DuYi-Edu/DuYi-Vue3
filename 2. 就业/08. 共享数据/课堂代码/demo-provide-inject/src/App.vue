<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <span v-if="state.loading">loading...</span>
    <template v-else-if="state.user">
      <span>{{ state.user.name }}</span>
      <a class="ml-5" href="" @click.prevent="handleLoginOut">退出</a>
    </template>
    <router-link v-else to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<script>
import { useStore } from "./store/useLoginUser";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    store.whoAmI();
    const handleLoginOut = async () => {
      await store.loginOut();
      router.push("/login");
    };
    return {
      ...store,
      handleLoginOut,
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
