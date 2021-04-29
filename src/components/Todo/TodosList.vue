<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      class="list"
    ></TodoItem>
  </ul>
  <div
    v-for="(expen, index) in expense"
    :key="expen.id"
    @click="handleClick(index)"
  >
    {{ expen.text }}
  </div>
</template>

<script>
import { inject } from "vue";
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  setup() {
    const todos = inject("todos");
    return { todos };
  },
  inject: ["expense", "handleClick"],
};
</script>

<style></style>
