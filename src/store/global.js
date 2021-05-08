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
    console.log(state.todos);
  },
};

export default { state, mutations };
