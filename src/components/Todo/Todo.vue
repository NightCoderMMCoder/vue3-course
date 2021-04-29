<template>
  <div>
    <input type="text" v-model="task" />
    <button @click="handleClick">Add</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Todo",
  setup() {
    const task = ref("");
    const todos = ref([]);
    let id = 1;
    const handleClick = () => {
      todos.value.unshift({
        id,
        task: task.value,
      });
      id++;
    };
    return { task, handleClick, todos };
  },
};
</script>

<style scoped>
div {
  margin-top: 50px;
}
</style>
