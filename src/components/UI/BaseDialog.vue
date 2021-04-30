<template>
  <div class="backdrop"></div>
  <div class="dialog">
    <h3>
      Just Checking...
    </h3>
    <div class="card-body">
      <p>Are you sure to delete?</p>
      <div class="btn-group">
        <button class="flat" @click="$emit('confirmDelete', false)">
          Cancel
        </button>
        <button @click="$emit('confirmDelete', true)">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["confirmDelete"],
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: white;
  box-shadow: var(--box-shadow);
  max-width: 80%;
  width: 500px;
}
h3 {
  background: #9c88ff;
  color: white;
  margin: 0;
  padding: 20px;
}
.card-body {
  padding: 20px;
}
p {
  margin: 0;
  margin-bottom: 10px;
}
.btn-group {
  text-align: right;
}
button {
  background: #9c88ff;
  color: white;
  padding: 8px 20px;
  border-radius: 100px;
  border: 2px solid #9c88ff;
  cursor: pointer;
  font-weight: bold;
}
.flat {
  background: transparent;
  border: 2px solid #9c88ff;
  color: #9c88ff;
}
</style>
