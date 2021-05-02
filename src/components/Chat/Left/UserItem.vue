<template>
  <div class="user-profile">
    <div class="user-info">
      <div class="user-img">{{ user.name.charAt(0) }}</div>
      <div>
        <h3 class="user-name">{{ user.name }}</h3>
        <small class="status">{{ user.status ? "Online" : "Offline" }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { user: Object },
};
</script>

<style scoped>
.user-profile {
  background: none;
}
.user-img {
  width: 60px;
  height: 60px;
  font-size: 25px;
}
</style>
