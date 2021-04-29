<template>
  <h1>Composition API</h1>
  <ul>
    <li>{{ name }}</li>
    <li>{{ age }}</li>
    <li>{{ userInfo }}</li>
    <li>{{ count }}</li>
    <button @click="increaseCount">Count</button>
  </ul>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    let user = reactive({
      name: "Aung Myat Oo",
      age: 30,
    });

    // const userInfo = computed({
    //   get: () => `${user.name} is ${user.age} years old`,
    //   set: (val) => (user.name = val),
    // });

    const userInfo = computed(() => `${user.name} is ${user.age} years old`);

    const state = reactive({
      count: 0,
    });

    const increaseCount = () => {
      state.count++;
    };

    return { ...toRefs(user), ...toRefs(state), increaseCount, userInfo };
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
