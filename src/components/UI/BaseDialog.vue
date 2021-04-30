<template>
  <div class="backdrop"></div>
  <base-card class="dialog">
    <template #header>
      <slot name="header"></slot>
    </template>

    <template #body>
      <slot name="body"></slot>
      <div class="btn-group">
        <slot name="actions">
          <base-button>Close</base-button>
        </slot>
      </div>
    </template>
  </base-card>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: white;
  box-shadow: var(--box-shadow);
  max-width: 80%;
  width: 500px;
}

.btn-group {
  text-align: right;
}
</style>
