import { reactive, watchEffect, watch } from "vue";
const state = reactive({
  count: 0,
});
watchEffect(() => {
  console.log("watchEffect", state.count);
});
watch(
  () => state.count,
  (count, oldCount) => {
    console.log("watch", count, oldCount);
  }
);
console.log("start");
setTimeout(() => {
  console.log("time out");
  state.count++;
  state.count++;
});
state.count++;
state.count++;

console.log("end");
