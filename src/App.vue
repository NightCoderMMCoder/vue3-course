<template>
  <h1>Composition API</h1>
  <ul>
    <li>{{ name }}</li>
    <li>{{ age }}</li>
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

    setTimeout(() => {
      user.name = "Myo Thant Kyaw";
    }, 1000);

    return { ...toRefs(user) };
  },
};

// let virus = "Corona";
// let public_voice = `${virus} go away`;
// virus = "Min Aung Hlaing";
// console.log(public_voice);
let data = { virus: "Corona", public_voice: "Corona Go Away" };
const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if (key === "virus") {
      target.public_voice = `${value} Go Away`;
    }
    target.virus = value;
    return true;
  },
};

const proxy = new Proxy(data, handler);
proxy.virus = "Min Aung Hlaing";
console.log(proxy);
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
