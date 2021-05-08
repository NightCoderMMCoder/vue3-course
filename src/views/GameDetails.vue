<template>
  <div v-if="loading">
    Loading...
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>
  <div v-else>
    <h1>Name: {{ game.name }}</h1>
    <img :src="game.background_image" alt="" />
    <p>{{ game.description }}</p>
    <div>
      <img
        v-for="platform in game.platforms"
        :key="platform.platform.id"
        :src="platform.platform.image_background"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("fetchGame", route.params.id);

    const game = computed(() => store.getters.game);
    const loading = computed(() => store.getters.loading);
    const error = computed(() => store.getters.error);

    return { game, error, loading };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
