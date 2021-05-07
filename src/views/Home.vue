<template>
  <search-box v-model="search"></search-box>
</template>

<script>
import { ref } from "vue";
import SearchBox from "../components/SearchBox.vue";
export default {
  components: { SearchBox },
  setup() {
    const search = ref("");
    return { search };
  },
};
</script>

<style></style>
