<template>
  <div class="game">
    <router-link :to="{ name: 'GameDetails', params: { id: game.id } }">
      <img :src="game.background_image" alt="" />
      <div>
        <h3>Name: {{ game.name }}</h3>
        <span>{{ game.rating }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: { game: Object },
};
</script>

<style scoped>
.game {
  width: 30%;
  margin: 20px 0;
}
.game img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}
.game div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.game div span {
  background: rgb(17, 64, 150);
  padding: 5px 10px;
  color: white;
  border-radius: 3px;
}
</style>
