<template>
  <div class="contact-card">
    <ChatHeader />
  </div>
</template>

<script>
import ChatHeader from "../Shared/ChatHeader.vue";
export default {
  components: { ChatHeader },
};
</script>

<style scoped>
.contact-card {
  width: 25%;
  border-right: 2px solid rgba(0, 0, 0, 0.116);
  min-height: 100vh;
}
</style>
