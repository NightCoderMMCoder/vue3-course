<template>
  <h1>Composition API</h1>
  <ul>
    <li>{{ user.name }}</li>
    <li>{{ user.age }}</li>
  </ul>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // let name = ref("Aung Myat Oo");
    // let age = ref(30);
    let user = reactive({
      name: "Aung Myat Oo",
      age: 30,
    });

    setTimeout(() => {
      // name.value = "Myo Thant Kyaw";
      // age.value = 40;
      // user.value.name = 'Myo Thant Kyaw';
      console.log(user);
      user.name = "Myo Thant Kyaw";
    }, 1000);

    return { user };
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
