<template>
  <search-box v-model="search"></search-box>
  <games-list></games-list>
</template>

<script>
import { ref } from "vue";
import SearchBox from "../components/SearchBox.vue";
import GamesList from "../components/GamesList.vue";
export default {
  components: { SearchBox, GamesList },
  setup() {
    const search = ref("");
    return { search };
  },
};
</script>

<style></style>
