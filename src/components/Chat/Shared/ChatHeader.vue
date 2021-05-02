<template>
  <div class="user-profile" v-if="user">
    <div class="user-info">
      <div class="user-img">{{ user.displayName.charAt(0) }}</div>
      <div>
        <h3 class="user-name">{{ user.displayName }}</h3>
        <small class="status">Online</small>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import useGetUser from "@/hooks/getUser";
export default {
  setup() {
    const { user } = useGetUser();
    return { user };
  },
};
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
