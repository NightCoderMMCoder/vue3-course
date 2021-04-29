<template>
  <h1>Composition API</h1>
  <ul>
    <li>{{ name }}</li>
    <li>{{ age }}</li>
    <li>{{ count }}</li>
    <button @click="increaseCount">Count</button>
  </ul>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    let user = reactive({
      name: "Aung Myat Oo",
      age: 30,
    });
    const state = reactive({
      count: 0,
    });

    const increaseCount = () => {
      state.count++;
    };

    setTimeout(() => {
      user.name = "Myo Thant Kyaw";
    }, 1000);

    return { ...toRefs(user), ...toRefs(state), increaseCount };
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
