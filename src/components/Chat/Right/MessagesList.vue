<template>
  <div class="chats-list" ref="chatsList">
    <MessageItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
    ></MessageItem>
  </div>
</template>

<script>
import moment from "moment";
import { nextTick, ref, watch, watchEffect } from "vue";
import MessageItem from "./MessageItem.vue";
import { db } from "../../../firebase/init";
import useGetUser from "@/hooks/getUser";
export default {
  components: { MessageItem },
  props: { otherUser: Object },
  setup(props) {
    const { user } = useGetUser();
    const messages = ref([]);
    let unsub;

    let collectionRef = db.collection("messages");
    watchEffect((onInValidate) => {
      if (props.otherUser) {
        unsub = collectionRef
          .doc(user.value?.uid)
          .collection(props.otherUser.uid)
          .orderBy("createdAt")
          .onSnapshot((snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
              if (doc.data().createdAt) {
                results.push({
                  ...doc.data(),
                  id: doc.id,
                  createdAt: moment(doc.data().createdAt.toDate()).calendar(),
                });
              }
            });
            messages.value = results;
          });
      }
      onInValidate(() => {
        if (unsub) {
          unsub();
        }
      });
    });

    const chatsList = ref(null);
    watch(
      messages,
      () => {
        nextTick(() => {
          // chatsList.value.scrollTo(0, chatsList.value.scrollHeight);
          chatsList.value.scroll({
            top: chatsList.value.scrollHeight,
            behavior: "smooth",
          });
        });
      },
      { deep: true }
    );

    return { messages, chatsList };
  },
};
</script>

<style scoped>
.chats-list {
  padding: 15px 10px;
  height: 77.52vh;
  overflow-y: auto;
  width: 100%;
}
</style>

// https://learnvue.co/2019/12/a-simple-vue-watcher-tutorial-for-beginners/
