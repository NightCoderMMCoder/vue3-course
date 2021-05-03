<template>
  <div class="chats-list">
    <MessageItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
    ></MessageItem>
  </div>
</template>

<script>
import moment from "moment";
import { ref, watchEffect } from "vue";
import MessageItem from "./MessageItem.vue";
import { db } from "../../../firebase/init";
import useGetUser from "@/hooks/getUser";
export default {
  components: { MessageItem },
  props: { otherUser: Object },
  setup(props) {
    const { user } = useGetUser();
    const messages = ref([]);

    let collectionRef = db.collection("messages");
    watchEffect(() => {
      if (props.otherUser) {
        collectionRef
          .doc(user.value.uid)
          .collection(props.otherUser.uid)
          .orderBy("createdAt")
          .onSnapshot((snapshot) => {
            console.log("snapshot");
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
    });
    return { messages };
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
