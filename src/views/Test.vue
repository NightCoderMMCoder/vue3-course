<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
import { toRefs } from "vue";
import useStore from "../store/global";
export default {
  setup() {
    const { state } = useStore;
    return { ...toRefs(state) };
  },
};
</script>

<style></style>
