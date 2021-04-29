<template>
  <h1>Composition API</h1>
  <Calculator />
</template>

<script>
import Calculator from "./components/Calculator.vue";
export default {
  components: { Calculator },
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
