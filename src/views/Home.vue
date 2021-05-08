<template>
  <div>
    <form @submit.prevent="addNewTodo">
      <input type="text" v-model="text" />
      <button type="submit">Add</button>
    </form>
    <todos-list></todos-list>
  </div>
</template>

<script>
import { inject, ref } from "vue";
import TodosList from "../components/TodosList.vue";
export default {
  components: { TodosList },
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
