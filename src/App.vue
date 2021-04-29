<template>
  <h1>Composition API</h1>
  <ul>
    <li>{{ name }}</li>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("Aung Myat Oo");

    setTimeout(() => {
      name.value = "Myo Thant Kyaw";
    }, 1000);

    return { name };
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
