const STORAGE_KEY = "todos-vuejs-3.x";

export function generateId() {
  return Date.now() + Math.random().toString(16).substr(2, 4);
}

export function fetch() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function save(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export const filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((todo) => {
      return !todo.completed;
    });
  },
  completed(todos) {
    return todos.filter(function (todo) {
      return todo.completed;
    });
  },
};
