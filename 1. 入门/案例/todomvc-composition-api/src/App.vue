<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodoRef"
        @keyup.enter="addTodo"
      />
    </header>
    <section class="main" v-show="todosRef.length">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        v-model="allDoneRef"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="todo in filteredTodosRef"
          class="todo"
          :key="todo.id"
          :class="{
            completed: todo.completed,
            editing: todo === editedTodoRef,
          }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input
            class="edit"
            type="text"
            v-model="todo.title"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.escape="cancelEdit(todo)"
          />
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todosRef.length">
      <span class="todo-count">
        <strong>{{ remainingRef }}</strong>
        <span>{{ pluralizeRef }} left</span>
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: visibilityRef === 'all' }">All</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: visibilityRef === 'active' }">
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            :class="{ selected: visibilityRef === 'completed' }"
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        class="clear-completed"
        @click="removeCompleted"
        v-show="todosRef.length > remainingRef"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { ref, watchEffect, computed, onMounted, onUnmounted } from "vue";
import { fetch, save, filters, generateId } from "./util/todoStorage";
export default {
  setup() {
    const todosRef = ref(fetch());
    watchEffect(() => {
      save(todosRef.value);
    });
    const allDoneRef = computed({
      get() {
        return filters.active(todosRef.value).length === 0;
      },
      set(value) {
        todosRef.value.forEach((todo) => {
          todo.completed = value;
        });
      },
    });
    const removeCompleted = () => {
      todosRef.value = filters.active(todosRef.value);
    };

    const newTodoRef = ref("");
    const addTodo = () => {
      var value = newTodoRef.value && newTodoRef.value.trim();
      if (!value) {
        return;
      }
      todosRef.value.push({
        id: generateId(),
        title: value,
        completed: false,
      });
      newTodoRef.value = "";
    };

    const removeTodo = (todo) => {
      let index = todo;
      if (typeof todo !== "number") {
        index = todosRef.value.indexOf(todo);
      }
      todosRef.value.splice(index, 1);
    };

    const editedTodoRef = ref(null); // 正在编辑的任务
    let beforeEditCache; // 缓存编辑前的任务标题
    const editTodo = (todo) => {
      beforeEditCache = todo.title;
      editedTodoRef.value = todo; // 标记正在编辑的任务
    };
    const doneEdit = (todo) => {
      if (!editedTodoRef.value) {
        return;
      }
      editedTodoRef.value = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        removeTodo(todo);
      }
    };
    const cancelEdit = (todo) => {
      editedTodoRef.value = null;
      todo.title = beforeEditCache;
    };

    const visibilityRef = ref("all");
    const onHashChange = () => {
      const visibility = window.location.hash.replace(/#\/?/, "");
      if (filters[visibility]) {
        visibilityRef.value = visibility;
      } else {
        window.location.hash = "";
        visibilityRef.value = "all";
      }
    };

    onMounted(() => {
      window.addEventListener("hashchange", onHashChange);
      onHashChange();
    });
    onUnmounted(() => {
      window.removeEventListener("hashchange", onHashChange);
    });
    const filteredTodosRef = computed(() => {
      return filters[visibilityRef.value](todosRef.value);
    });
    const remainingRef = computed(() => {
      return filters.active(todosRef.value).length;
    });
    const pluralizeRef = computed(() => {
      return remainingRef.value === 1 ? "item" : "items";
    });

    return {
      todosRef,
      allDoneRef,
      removeCompleted,
      newTodoRef,
      addTodo,
      removeTodo,
      editedTodoRef,
      editTodo,
      doneEdit,
      cancelEdit,
      visibilityRef,
      filteredTodosRef,
      remainingRef,
      pluralizeRef,
    };
  },
};
</script>
