<template>
  <h1>Game App</h1>
  <games-list></games-list>
</template>

<script>
import { inject } from "vue";
import GamesList from "../components/Game/GamesList.vue";
export default {
  components: { GamesList },
  setup() {
    const {
      mutations: { fetchGames },
    } = inject("gamesStore");
    fetchGames();
  },
};
</script>

<style></style>
