<template>
  <div>
    <input type="text" v-model="task" />
    <button @click="handleClick">Add</button>
    <TodosList :todos="todos" @remove-todo="handleDelete" />
  </div>
</template>

<script>
import { ref } from "vue";
import TodosList from "./TodosList.vue";
export default {
  components: { TodosList },
  name: "Todo",
  setup() {
    const task = ref("");
    const todos = ref([]);
    let id = 1;
    const handleClick = () => {
      todos.value.unshift({
        id,
        task: task.value,
      });
      id++;
      task.value = "";
    };
    const handleDelete = (id) => {
      let index = todos.value.findIndex((todo) => todo.id === id);
      todos.value.splice(index, 1);
    };
    return { task, handleClick, todos, handleDelete };
  },
};
</script>

<style scoped>
div {
  margin-top: 50px;
}
</style>
