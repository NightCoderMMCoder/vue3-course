<template>
  <div class="chat">
    <welcome-chat></welcome-chat>
  </div>
</template>

<script>
import WelcomeChat from "./WelcomeChat.vue";
export default {
  components: { WelcomeChat },
};
</script>

<style scoped>
.chat {
  width: 75%;
}
</style>
