<template>
  <div class="contact-list">
    <user-item v-for="user in users" :key="user.uid" :user="user"></user-item>
  </div>
</template>

<script>
import { ref } from "vue";
import { db } from "../../../firebase/init";
import UserItem from "./UserItem.vue";
import useGetUser from "@/hooks/getUser";

export default {
  components: { UserItem },
  async setup() {
    const { user } = useGetUser();
    const users = ref([]);
    let collectionRef = db.collection("users").orderBy("createdAt");
    const res = await collectionRef.get();
    res.docs.reverse().forEach((doc) => {
      if (doc.id !== user.value.uid) {
        users.value.push({ ...doc.data(), uid: doc.id });
      }
    });
    return { users };
  },
};
</script>

<style scoped></style>
