<template>
  <div class="menu-bar-container">
    <div class="logo">
      <h1>logo</h1>
    </div>
    <ul class="nav">
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
    </ul>
    <div class="user" :class="user.name">
      <span :class="user.name">{{ user.name }}</span>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      user: {
        name: "monica",
      },
    };
  },
};
</script>
