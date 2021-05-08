<template>
  <h1>Game App</h1>
  <input type="text" v-model="search" @keypress.enter="searchGames(search)" />
  <games-list></games-list>
</template>

<script>
import { inject, ref } from "vue";
import GamesList from "../components/Game/GamesList.vue";
export default {
  components: { GamesList },
  setup() {
    const {
      mutations: { fetchGames, searchGames },
    } = inject("gamesStore");
    fetchGames();

    const search = ref("");

    return { search, searchGames };
  },
};
</script>

<style></style>
