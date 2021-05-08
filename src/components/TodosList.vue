<template>
  <ul>
    <todo-item v-for="todo in todos()" :key="todo.id" :todo="todo"></todo-item>
  </ul>
</template>

<script>
import { inject } from "vue";
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  setup() {
    const { getters } = inject("store");
    return { ...getters };
  },
};
</script>

<style></style>
