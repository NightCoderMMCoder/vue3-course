<template>
  <div>
    <search-box
      :search="search"
      @update-search="search = $event"
      @searchMeals="searchMeals"
    ></search-box>
    <meals-list></meals-list>
  </div>
</template>

<script>
import MealsList from "./components/MealsList.vue";
import SearchBox from "./components/SearchBox.vue";
export default {
  name: "App",
  components: {
    SearchBox,
    MealsList,
  },
  data: () => ({
    search: "",
  }),
  methods: {
    searchMeals() {
      this.$store.dispatch("searchMeals", this.search);
    },
  },
};
</script>

<style></style>
