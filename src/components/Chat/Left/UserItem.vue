<template>
  <router-link :to="{ name: 'ChatRoom', params: { userId: user.uid } }">
    <div class="user-profile">
      <div class="user-info">
        <div class="user-img">{{ user.name.charAt(0) }}</div>
        <div>
          <h3 class="user-name">{{ user.name }}</h3>
          <small class="status">{{ user.status ? "Online" : "Offline" }}</small>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: { user: Object },
};
</script>

<style scoped>
.user-profile {
  background: none;
  color: white;
}
.router-link-exact-active .user-profile {
  background: #66666646;
}
.user-img {
  width: 60px;
  height: 60px;
  font-size: 25px;
}
</style>
