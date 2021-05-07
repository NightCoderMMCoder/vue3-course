<template>
  <input
    type="text"
    :value="search"
    @input="(e) => $emit('updateSearch', e.target.value)"
    @keyup.enter="$emit('searchMeals')"
  />
</template>

<script>
export default {
  props: { search: String },
};
</script>

<style></style>
