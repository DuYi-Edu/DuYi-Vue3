<template>
  <h1>Home Page</h1>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const bar = inject("bar");
    console.log("home", bar);
  },
};
</script>
