<template>
  <input
    type="text"
    :value="search"
    @input="(e) => $emit('update:search', e.target.value)"
    @keyup.enter="$emit('searchGames')"
  />
</template>

<script>
export default {
  props: { search: String },
  emits: ["update:search", "searchGames"],
};
</script>

<style></style>
