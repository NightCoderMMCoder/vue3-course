<template>
  <div>
    <form @submit.prevent="handleClick">
      <input type="text" v-model="task" />
      <button type="submit">Add</button>
    </form>
    <TodosList />
  </div>
</template>

<script>
import { provide, ref } from "vue";
import TodosList from "./TodosList.vue";
export default {
  components: { TodosList },
  name: "Todo",
  setup() {
    const task = ref("");
    const todos = ref([]);
    provide("todos", todos);
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

    provide("removeTodo", handleDelete);

    return { task, handleClick, todos, handleDelete };
  },
};
</script>

<style scoped>
div {
  margin-top: 50px;
}
</style>
