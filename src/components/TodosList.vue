<template>
  <ul>
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);
    return { todos };
  },
};
</script>

<style></style>
