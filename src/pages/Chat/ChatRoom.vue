<template>
  <chat-header :user="user"></chat-header>
  <messages-list :otherUser="user"></messages-list>
  <message-box></message-box>
</template>

<script>
import MessageBox from "../../components/Chat/Right/MessageBox.vue";
import MessagesList from "../../components/Chat/Right/MessagesList.vue";
import ChatHeader from "../../components/Chat/Shared/ChatHeader.vue";
import useDoc from "../../hooks/useDoc";
export default {
  components: { ChatHeader, MessagesList, MessageBox },
  props: { userId: String },
  setup({ userId }) {
    const { getDoc, item: user } = useDoc("users", userId);
    getDoc();
    return { user };
  },
};
</script>
