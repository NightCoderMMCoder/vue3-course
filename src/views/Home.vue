<template>
  <div>
    <form @submit.prevent="addNewTodo">
      <input type="text" v-model="text" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { inject, ref } from "vue";
export default {
  name: "Home",
  setup() {
    const {
      mutations: { addTodo },
    } = inject("store");

    const text = ref("");
    const addNewTodo = () => {
      addTodo(text.value);
      text.value = "";
    };

    return { text, addNewTodo };
  },
};
</script>
