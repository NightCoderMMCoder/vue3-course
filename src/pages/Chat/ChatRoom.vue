<template>
  <chat-header :user="user"></chat-header>
  <messages-list></messages-list>
</template>

<script>
import MessagesList from "../../components/Chat/Right/MessagesList.vue";
import ChatHeader from "../../components/Chat/Shared/ChatHeader.vue";
import useDoc from "../../hooks/useDoc";
export default {
  components: { ChatHeader, MessagesList },
  props: { userId: String },
  setup({ userId }) {
    const { getDoc, item: user } = useDoc("users", userId);
    getDoc();
    return { user };
  },
};
</script>

<style></style>
