<template>
  <div>
    <meal-item
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"
    ></meal-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MealItem from "./MealItem.vue";
export default {
  components: { MealItem },
  computed: {
    ...mapGetters(["meals"]),
    // meals() {
    //   return this.$store.getters.meals;
    // },
  },
};
</script>

<style></style>
