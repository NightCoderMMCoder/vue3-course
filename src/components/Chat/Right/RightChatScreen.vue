<template>
  <div class="chat">
    <!-- <welcome-chat v-if="!$route.params.userId"></welcome-chat>
    <chat-room v-else></chat-room> -->
    <component :is="renderComponent"></component>
  </div>
</template>

<script>
import { computed } from "vue";
import ChatRoom from "./ChatRoom.vue";
import WelcomeChat from "./WelcomeChat.vue";
import { useRoute } from "vue-router";
export default {
  components: { WelcomeChat, ChatRoom },
  setup() {
    const route = useRoute();
    const renderComponent = computed(() =>
      route.params.userId ? "ChatRoom" : "WelcomeChat"
    );
    return { renderComponent };
  },
};
</script>

<style scoped>
.chat {
  width: 75%;
}
</style>
