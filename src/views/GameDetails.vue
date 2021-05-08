<template>
  <div>
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
    return { game };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
