<template>
  <div>
    <div v-if="meals">
      <meal-item
        v-for="meal in meals"
        :key="meal.idMeal"
        :meal="meal"
      ></meal-item>
    </div>
    <p>There is no meals</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MealItem from "./MealItem.vue";
export default {
  components: { MealItem },
  computed: {
    // ...mapGetters("Meals", ["meals"]),
    meals() {
      return this.$store.getters["Meals/meals"];
    },
  },
};
</script>

<style></style>
