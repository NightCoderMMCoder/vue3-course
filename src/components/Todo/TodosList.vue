<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      class="list"
      @delete-todo="$emit('removeTodo', $event)"
    ></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  props: { todos: Array },
  emits: ["removeTodo"],
};
</script>

<style></style>
