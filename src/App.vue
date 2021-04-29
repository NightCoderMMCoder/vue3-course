<template>
  <h1>Composition API</h1>
  <Calculator />
  <Todo />
  {{ name }}
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
import Calculator from "./components/Calculator.vue";
import Todo from "./components/Todo/Todo.vue";
export default {
  components: { Calculator, Todo },
  name: "App",
  setup() {
    const name = ref("Aung Myat Oo");
    setTimeout(() => (name.value = "Someone"), 1000);
    console.log("Before Create & Created");
    onBeforeMount(() => console.log("onBeforeMount"));
    onMounted(() => console.log("onMounted"));
    onBeforeUpdate(() => console.log("onBeforeUpdate"));
    onUpdated(() => console.log("onUpdated"));
    onBeforeUnmount(() => console.log("onBeforeUnmount"));
    onUnmounted(() => console.log("onUnmounted"));
    return { name };
  },
  data() {
    return {
      expense: [
        {
          id: 1,
          text: "Game",
        },
        {
          id: 2,
          text: "Shopping",
        },
      ],
    };
  },
  provide() {
    return {
      expense: this.expense,
      handleClick: this.handleClick,
    };
  },
  methods: {
    handleClick(id) {
      this.expense.splice(id, 1);
    },
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
