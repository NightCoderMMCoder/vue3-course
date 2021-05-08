<template>
  <div>
    <button @click="decreaseCount">-</button>
    {{ count }}
    <button @click="increaseCount">+</button>
  </div>
</template>

<script>
import { toRefs } from "vue";
import useStore from "../store/global";
export default {
  name: "Home",
  setup() {
    const { state, increaseCount, decreaseCount } = useStore;
    return { ...toRefs(state), increaseCount, decreaseCount };
  },
};
</script>
