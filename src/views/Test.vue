<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  setup() {
    const { state } = inject("store");
    return { ...toRefs(state) };
  },
};
</script>

<style></style>
