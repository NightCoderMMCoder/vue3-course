<template>
  <chat-header :user="user"></chat-header>
</template>

<script>
import { useRoute } from "vue-router";
import ChatHeader from "../../components/Chat/Shared/ChatHeader.vue";
import useDoc from "../../hooks/useDoc";
export default {
  components: { ChatHeader },
  props: { userId: String },
  setup(props) {
    // const route = useRoute();
    const { getDoc, item: user } = useDoc("users", props.userId);
    getDoc();
    console.log("chatroom");
    return { user };
  },
};
</script>

<style></style>
