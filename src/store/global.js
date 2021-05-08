import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";

const state = reactive({
  todos: [],
});

const mutations = {
  addTodo(text) {
    const newTodo = {
      id: uuidv4(),
      text,
    };
    state.todos.push(newTodo);
  },
  deleteTodo(id) {
    const index = state.todos.findIndex((todo) => todo.id === id);
    state.todos.splice(index, 1);
  },
};

const getters = {
  todos() {
    return state.todos;
  },
};

export default { state, mutations, getters };
