<template>
  <li>
    {{ taskToUpperCase }} <button @click="handleDelete(todo.id)">Delete</button>
  </li>
</template>

<script>
import { computed } from "vue";
export default {
  props: { todo: Object },
  emits: ["deleteTodo"],
  setup({ todo }, { emit }) {
    const taskToUpperCase = computed(() => todo.task.toUpperCase());
    const handleDelete = (id) => {
      emit("deleteTodo", id);
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
