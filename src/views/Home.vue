<template>
  <search-box v-model="search"></search-box>
  <games-list></games-list>
</template>

<script>
import { ref } from "vue";
import SearchBox from "../components/SearchBox.vue";
import GamesList from "../components/GamesList.vue";
import { useStore } from "vuex";
export default {
  components: { SearchBox, GamesList },
  setup() {
    const store = useStore();
    const search = ref("");
    store.dispatch("fetchGames");
    return { search };
  },
};
</script>

<style></style>
