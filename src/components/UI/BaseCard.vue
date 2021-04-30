<template>
  <div class="card">
    <div class="card-header">
      <h3><slot name="header"> </slot></h3>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  background: #9c88ff;
  color: white;
  margin: 0;
  padding: 20px;
}

.card-body {
  padding: 20px;
}
</style>
