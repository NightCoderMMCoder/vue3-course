import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "Todo",
  reducer: (state) => ({ todos: state.todos }),
});

let id = 1;

export default createStore({
  state: {
    todos: [],
    error: "Something went wrong",
  },
  mutations: {
    addTodo(state, text) {
      state.todos.push({
        id,
        text,
      });
      id++;
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
