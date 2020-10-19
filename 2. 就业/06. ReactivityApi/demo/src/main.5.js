import { reactive, ref, watch } from "vue";

const state = reactive({ a: 1, b: 2 });
const count = ref(0);

watch([() => state.a, count], () => {
  console.log("变化了");
});

count.value++;
state.a++;
