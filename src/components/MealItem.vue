<template>
  <div>
    <h1>Name: {{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" alt="" />
    <span class="badge">
      {{ meal.strCategory }}
    </span>
    <ul>
      <li v-for="(ingredient, idx) in ingredients" :key="idx">
        {{ ingredient.name }} - {{ ingredient.quantity }}
      </li>
    </ul>
    <p>
      {{ meal.strInstructions }}
    </p>
  </div>
</template>

<script>
export default {
  props: { meal: Object },
  computed: {
    ingredients() {
      let results = [];
      for (let i = 1; i <= 20; i++) {
        if (this.meal[`strIngredient${i}`] && this.meal[`strMeasure${i}`]) {
          results.push({
            name: this.meal[`strIngredient${i}`],
            quantity: this.meal[`strMeasure${i}`],
          });
        } else {
          continue;
        }
      }
      return results;
    },
  },
};
</script>

<style></style>
