<template>
  <form @submit.prevent="sendMessage">
    <div class="message-box">
      <input
        type="text"
        v-model.trim="message"
        placeholder="Send a message..."
      />
      <i class="fas fa-paper-plane" @click="sendMessage"></i>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { db, timestamp } from "../../../firebase/init";
import useGetUser from "@/hooks/getUser";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const otherUid = route.params.userId;
    const { user } = useGetUser();

    const message = ref("");
    const error = ref("afsd");

    const sendMessage = () => {
      if (!message.value) return;
      try {
        const newMessage = {
          text: message.value,
          createdAt: timestamp(),
          uid: user.value.uid,
        };
        let collectionRef = db.collection("messages");
        collectionRef
          .doc(user.value.uid)
          .collection(otherUid)
          .add(newMessage);

        delete newMessage.uid;
        collectionRef
          .doc(otherUid)
          .collection(user.value.uid)
          .add(newMessage);
        message.value = "";
      } catch (err) {
        error.value = err.message;
      }
    };
    return { message, sendMessage };
  },
};
</script>

<style scoped>
.message-box {
  position: fixed;
  bottom: 0;
  width: 75%;
  background: var(--primary);
  padding: 15px 10px;
  display: flex;
  align-items: center;
}
input {
  width: 100%;
  background: var(--input-background);
  outline: none;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 50px;
  color: var(--input-color);
}
input::placeholder {
  color: var(--input-color);
}
.message-box .fas {
  padding: 12px;
  cursor: pointer;
  background: var(--input-background);
  border-radius: 50%;
  margin-left: 10px;
}
</style>
