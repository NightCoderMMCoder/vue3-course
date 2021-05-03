<template>
  <div class="contact-card">
    <ChatHeader :user="user">
      <base-button @click="logout">Logout</base-button>
    </ChatHeader>
    <search-box v-model:search="search"></search-box>
    <users-list :search="search"></users-list>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { firebaseAuth } from "../../../firebase/init";
import ChatHeader from "../Shared/ChatHeader.vue";
import SearchBox from "./SearchBox.vue";
import UsersList from "./UsersList.vue";
import useGetUser from "@/hooks/getUser";
import useDoc from "@/hooks/useDoc";
import { ref } from "vue";

export default {
  components: { ChatHeader, SearchBox, UsersList },
  setup() {
    const { user } = useGetUser();
    const search = ref("");
    console.log(user.value);
    const { updateDoc } = useDoc("users", user.value.uid);
    const router = useRouter();
    const logout = async () => {
      await updateDoc({ status: false });
      await firebaseAuth.signOut();
      router.push({ name: "Login" });
    };

    return { logout, search, user };
  },
};
</script>

<style scoped>
.contact-card {
  width: 25%;
  border-right: 2px solid rgba(0, 0, 0, 0.116);
  min-height: 100vh;
}
</style>
