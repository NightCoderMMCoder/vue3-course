<template>
  <div class="user-profile" v-if="user">
    <div class="user-info">
      <div class="user-img">{{ user.name.charAt(0) }}</div>
      <div>
        <h3 class="user-name">{{ user.name }}</h3>
        <small class="status">Online</small>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: { user: Object },
};
</script>
