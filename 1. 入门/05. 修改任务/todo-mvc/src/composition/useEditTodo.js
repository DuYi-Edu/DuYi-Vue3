import { ref, computed } from "vue";

export default function useEditTodo(todosRef) {
  const editingTodoRef = ref(null); // 当前正在修改的是哪一个todo
  let originTitle = null; // 缓存之前的title值
  const editTodo = (todo) => {
    originTitle = todo.title;
    editingTodoRef.value = todo;
  };
  const doneEdit = () => {
    editingTodoRef.value = null;
  };
  const cancelEdit = (todo) => {
    editingTodoRef.value = null;
    todo.title = originTitle;
  };
  const allDoneRef = computed({
    get() {
      var val = todosRef.value.filter((it) => !it.completed).length === 0;
      return val;
    },
    set(checked) {
      todosRef.value.forEach((todo) => {
        todo.completed = checked;
      });
    },
  });
  return {
    editingTodoRef,
    editTodo,
    doneEdit,
    cancelEdit,
    allDoneRef,
  };
}
