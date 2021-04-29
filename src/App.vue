<template>
  <h1>Composition API</h1>
  <Calculator />
  <Todo />
</template>

<script>
import Calculator from "./components/Calculator.vue";
import Todo from "./components/Todo/Todo.vue";
export default {
  components: { Calculator, Todo },
  name: "App",
  setup() {},
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
