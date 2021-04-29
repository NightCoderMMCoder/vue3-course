<template>
  <li>{{ taskToUpperCase }}</li>
</template>

<script>
import { computed } from "vue";
export default {
  props: { todo: Object },
  setup({ todo }) {
    const taskToUpperCase = computed(() => todo.task.toUpperCase());
    return { taskToUpperCase };
  },
};
</script>

<style></style>
