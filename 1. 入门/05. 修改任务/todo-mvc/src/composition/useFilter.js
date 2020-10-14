import { ref, onMounted, onUnmounted, computed } from "vue";
import { filter } from "../util/todoStorage";

const validHash = ["all", "active", "completed"];

export default function useFilter(todosRef) {
  const visibilityRef = ref("all");

  const onHashChange = () => {
    const hash = location.hash.replace(/#\/?/, "");
    if (validHash.includes(hash)) {
      //有效的
      visibilityRef.value = hash;
    } else {
      location.hash = "";
      visibilityRef.value = "all";
    }
  };

  // 1. 组件挂载完成的生命周期函数
  onMounted(() => {
    window.addEventListener("hashchange", onHashChange);
  });
  // 2. 组件销毁过后的生命周期函数
  onUnmounted(() => {
    window.removeEventListener("hashchange", onHashChange);
  });

  const filteredTodosRef = computed(() => {
    return filter(todosRef.value, visibilityRef.value);
  });

  const remainingRef = computed(() => {
    return filter(todosRef.value, "active").length;
  });

  const completedRef = computed(() => {
    return filter(todosRef.value, "completed").length;
  });

  return {
    visibilityRef,
    filteredTodosRef,
    remainingRef,
    completedRef,
  };
}
