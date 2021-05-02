<template>
  <div class="user-profile">
    <div class="user-info">
      <div class="user-img">A</div>
      <div>
        <h3 class="user-name">Aung Myat Oo</h3>
        <small class="status">Online</small>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-profile {
  background: var(--secondary);
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-img {
  margin-right: 10px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  border-radius: 50%;
  font-size: 30px;
  color: white;
}
.status {
  color: rgb(214, 214, 214);
}
</style>
