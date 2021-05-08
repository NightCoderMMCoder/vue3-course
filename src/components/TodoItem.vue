<template>
  <li>
    {{ todo.text }}
    <button @click="deleteTodo">Delete</button>
  </li>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: { todo: Object },
  setup({ todo }) {
    const store = useStore();
    const deleteTodo = () => {
      store.commit("deleteTodo", todo.id);
    };
    return { deleteTodo };
  },
};
</script>

<style></style>
