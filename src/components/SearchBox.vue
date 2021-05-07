<template>
  <input
    type="text"
    :value="modelValue"
    @input="(e) => $emit('update:modelValue', e.target.value)"
  />
</template>

<script>
export default {
  props: { modelValue: String },
};
</script>

<style></style>
