<template>
  <form @submit.prevent="addNewTodo">
    <input type="text" v-model="text" />
    <button>Add</button>
  </form>
  <todos-list></todos-list>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import TodosList from "./components/TodosList.vue";

export default {
  components: { TodosList },
  name: "App",
  setup() {
    const store = useStore();
    const text = ref("");

    const addNewTodo = () => {
      store.commit("addTodo", text.value);
      text.value = "";
    };
    return { text, addNewTodo };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
