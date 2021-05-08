<template>
  <search-box v-model="search" @search-games="searchGames"></search-box>
  <div v-if="loading">
    Loading...
  </div>
  <div v-else-if="error">{{ error }}</div>
  <games-list v-else></games-list>
</template>

<script>
import { computed, ref } from "vue";
import SearchBox from "../components/SearchBox.vue";
import GamesList from "../components/GamesList.vue";
import { useStore } from "vuex";
export default {
  components: { SearchBox, GamesList },
  setup() {
    const store = useStore();
    const search = ref("");
    store.dispatch("fetchGames");

    const searchGames = () => {
      store.dispatch("searchGames", search.value);
    };

    console.log(process.env.VUE_APP_API_KEY);

    const loading = computed(() => store.getters.loading);
    const error = computed(() => store.getters.error);

    return { search, searchGames, loading, error };
  },
};
</script>

<style></style>
