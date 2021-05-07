<template>
  <div class="games-list">
    <game-item v-for="game in games" :key="game.id" :game="game"></game-item>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import GameItem from "./GameItem.vue";

export default {
  components: { GameItem },
  setup() {
    const store = useStore();
    const games = computed(() => store.getters.games);
    return { games };
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
