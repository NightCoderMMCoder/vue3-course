<template>
  <input type="text" v-model.number="firstNum" />
  <select v-model="symbol">
    <option>+</option>
    <option>-</option>
    <option>*</option>
    <option>/</option>
  </select>
  <input type="text" v-model.number="secondNum" />
  <span>=</span>
  <span>{{ result }}</span>
</template>

<script>
import { computed, reactive, toRefs, watch } from "vue";
export default {
  setup() {
    const state = reactive({
      firstNum: 0,
      secondNum: 0,
      result: 0,
      symbol: "+",
    });

    watch(
      () => [state.firstNum, state.secondNum, state.symbol],
      (val) => {
        if (val[2] === "+") {
          state.result = val[0] + val[1];
        } else if (val[2] === "-") {
          state.result = val[0] - val[1];
        } else if (val[2] === "*") {
          state.result = val[0] * val[1];
        } else if (val[2] === "/") {
          state.result = val[0] / val[1];
        }
      }
    );

    return { ...toRefs(state) };
  },
};
</script>

<style></style>
