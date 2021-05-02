<template>
  <div class="chat-screen">
    <left-chat-screen></left-chat-screen>
    <right-chat-screen></right-chat-screen>
  </div>
</template>

<script>
import LeftChatScreen from "../../components/Chat/Left/LeftChatScreen.vue";
import RightChatScreen from "../../components/Chat/Right/RightChatScreen.vue";
export default {
  components: { LeftChatScreen, RightChatScreen },
};
</script>

<style scoped>
.chat-screen {
  display: flex;
}
</style>
