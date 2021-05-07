<template>
  <div>
    <search-box :search="search" @search-meals="search = $event"></search-box>
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
};
</script>

<style></style>
