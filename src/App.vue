<template>
  <h1>Composition API</h1>
  <p>{{ count }}</p>
  <span>{{ message }}</span>
  <button @click="handleClick">Count</button>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
export default {
  name: "App",
  setup() {
    // const count = ref(0);
    // const message = ref("");
    const state = reactive({
      count: 0,
      message: "",
    });

    const handleClick = () => {
      state.count++;
    };
    // watch(count, (val) => {
    //   if (val < 5) {
    //     message.value = "Less";
    //   } else if (val < 10) {
    //     message.value = "Medium";
    //   } else {
    //     message.value = "Large";
    //   }
    // }, { deep: true });
    watch(
      () => state.count,
      (val) => {
        if (val < 5) {
          state.message = "Less";
        } else if (val < 10) {
          state.message = "Medium";
        } else {
          state.message = "Large";
        }
      },
      { deep: true }
    );

    return { ...toRefs(state), handleClick };
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
