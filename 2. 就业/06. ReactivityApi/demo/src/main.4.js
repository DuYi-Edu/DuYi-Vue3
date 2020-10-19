import { reactive, ref, watchEffect } from "vue";

const state = reactive({ a: 1, b: 2 });
const count = ref(0);

watchEffect(() => {
  console.log(state.a, count.value);
});

state.a++;
state.a++;
state.a++;
state.a++;
state.a++;
count.value++;
count.value++;
count.value++;
count.value++;
