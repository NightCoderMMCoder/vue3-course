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
  setup() {
    const { user } = useGetUser();
    const users = ref([]);
    let collectionRef = db.collection("users").orderBy("createdAt");
    // const res = await collectionRef.get();
    // res.docs.reverse().forEach((doc) => {
    //   if (doc.id !== user.value.uid) {
    //     users.value.push({ ...doc.data(), uid: doc.id });
    //   }
    // });
    collectionRef.onSnapshot((snapshot) => {
      console.log("snapshot");
      // snapshot.docs.forEach((doc) => {
      //   if (doc.id !== user.value.uid) {
      //     users.value.push({ ...doc.data(), uid: doc.id });
      //   }
      // });
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          if (change.doc.id !== user.value.uid) {
            users.value.push({ ...change.doc.data(), uid: change.doc.id });
          }
        }
        if (change.type === "modified") {
          let index = users.value.findIndex(
            (_user) => _user.uid === change.doc.id
          );
          users.value[index] = { ...change.doc.data(), uid: change.doc.id };
          // console.log(change);
        }
      });
    });

    return { users };
  },
};
</script>

<style scoped></style>
