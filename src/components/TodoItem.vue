<template>
  <li>{{ todo.text }} <button @click="deleteTodo(todo.id)">Delete</button></li>
</template>

<script>
import { inject } from "vue";
export default {
  props: { todo: Object },
  setup() {
    const {
      mutations: { deleteTodo },
    } = inject("store");
    return { deleteTodo };
  },
};
</script>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
</style>
