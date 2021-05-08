<template>
  <input
    type="text"
    :value="modelValue"
    @input="(e) => $emit('update:modelValue', e.target.value)"
    @keypress.enter="$emit('searchGames')"
  />
</template>

<script>
export default {
  props: { modelValue: String },
  emits: ["update:modelValue", "searchGames"],
};
</script>

<style></style>
