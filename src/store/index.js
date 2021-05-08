import { createStore } from "vuex";
let id = 1;

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, text) {
      state.todos.push({
        id,
        text,
      });
      console.log(state.todos);
      id++;
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
  actions: {},
  getters: {
    todos(state) {
      return state.todos;
    },
  },
  modules: {},
});
