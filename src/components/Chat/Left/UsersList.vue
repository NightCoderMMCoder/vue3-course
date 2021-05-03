<template>
  <div class="contact-list">
    <user-item
      v-for="user in searchUsers"
      :key="user.uid"
      :user="user"
    ></user-item>
  </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";
import { db } from "../../../firebase/init";
import UserItem from "./UserItem.vue";
import useGetUser from "@/hooks/getUser";

export default {
  components: { UserItem },
  props: { search: String },
  setup(props) {
    const { search } = toRefs(props);
    const { user } = useGetUser();
    const users = ref([]);
    let collectionRef = db.collection("users").orderBy("createdAt");

    collectionRef.onSnapshot((snapshot) => {
      console.log("snapshot");
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
        }
      });
    });

    const searchUsers = computed(() => {
      if (search.value.trim()) {
        return users.value.filter((_user) =>
          _user.name.toLowerCase().includes(search.value.toLowerCase())
        );
      }
      return users.value;
    });

    return { users, searchUsers };
  },
};
</script>

<style scoped>
.contact-list {
  padding: 5px 0;
}
</style>
