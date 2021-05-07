<template>
  <div>
    <h1>Vuex</h1>
    <p>{{ count }}</p>
    <button @click="increaseCount">Count</button>
  </div>
</template>

<script>
export default {
  name: "App",
  // data: () => ({

  // }),
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    increaseCount() {
      this.$store.commit("increaseCount");
    },
  },
};
</script>

<style></style>
