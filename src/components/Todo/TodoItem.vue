<template>
  <li>
    {{ taskToUpperCase }} <button @click="handleDelete(todo.id)">Delete</button>
  </li>
</template>

<script>
import { computed, inject } from "vue";
export default {
  props: { todo: Object },
  setup({ todo }) {
    const deleteTodo = inject("removeTodo");
    const taskToUpperCase = computed(() => todo.task.toUpperCase());
    const handleDelete = (id) => {
      deleteTodo(id);
    };

    return { taskToUpperCase, handleDelete };
  },
};
</script>

<style scoped>
li {
  padding: 10px;
}
</style>
