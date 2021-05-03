<template>
  <form>
    <div class="message-box">
      <input type="text" placeholder="Send a message..." />
      <i class="fas fa-paper-plane"></i>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.message-box {
  position: fixed;
  bottom: 0;
  width: 75%;
  background: var(--primary);
  padding: 15px 10px;
  display: flex;
  align-items: center;
}
input {
  width: 100%;
  background: var(--input-background);
  outline: none;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 50px;
  color: var(--input-color);
}
input::placeholder {
  color: var(--input-color);
}
.message-box .fas {
  padding: 12px;
  cursor: pointer;
  background: var(--input-background);
  border-radius: 50%;
  margin-left: 10px;
}
</style>
