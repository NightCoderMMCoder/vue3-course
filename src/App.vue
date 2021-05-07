<template>
  <div>
    <search-box
      :search="search"
      @update-search="search = $event"
      @searchMeals="searchMeals(search)"
    ></search-box>
    <meals-list></meals-list>
  </div>
</template>

<script>
import MealsList from "./components/MealsList.vue";
import SearchBox from "./components/SearchBox.vue";
import { mapActions } from "vuex";
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
    ...mapActions(["searchMeals"]),
    // searchMeal() {
    //   // this.$store.dispatch("searchMeals", this.search);
    //   this.searchMeals(this.search);
    // },
  },
};
</script>

<style></style>
