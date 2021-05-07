<template>
  <input
    type="text"
    :value="search"
    @input="(e) => $emit('searchMeals', e.target.value)"
  />
</template>

<script>
export default {
  props: { search: String },
};
</script>

<style></style>
