<template>
  <div class="games-list">
    <game-item v-for="game in games" :key="game.id" :game="game"></game-item>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
import GameItem from "./GameItem.vue";
export default {
  components: { GameItem },
  setup() {
    const { state } = inject("gamesStore");
    return { ...toRefs(state) };
  },
};
</script>

<style scoped>
.games-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  flex-wrap: wrap;
}
</style>
