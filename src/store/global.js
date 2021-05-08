import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";

const state = reactive({
  todos: [],
});
state.todos = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const mutations = {
  addTodo(text) {
    const newTodo = {
      id: uuidv4(),
      text,
    };
    state.todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  deleteTodo(id) {
    const index = state.todos.findIndex((todo) => todo.id === id);
    state.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
};

const getters = {
  todos() {
    return state.todos;
  },
};

export default { state, mutations, getters };
