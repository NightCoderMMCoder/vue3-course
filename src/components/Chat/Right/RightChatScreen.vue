<template>
  <div class="chat">
    <!-- <welcome-chat v-if="!$route.params.userId"></welcome-chat>
    <chat-room v-else></chat-room> -->
    <!-- <component :is="renderComponent"></component> -->
    <welcome-chat v-if="!$route.params.userId"></welcome-chat>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import { computed } from "vue";
import WelcomeChat from "./WelcomeChat.vue";
import { useRoute } from "vue-router";
export default {
  components: { WelcomeChat },
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
