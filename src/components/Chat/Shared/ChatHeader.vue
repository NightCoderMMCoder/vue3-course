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
