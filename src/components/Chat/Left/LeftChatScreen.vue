<template>
  <div class="contact-card">
    <ChatHeader>
      <base-button @click="logout">Logout</base-button>
    </ChatHeader>
    <search-box></search-box>
    <users-list></users-list>
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

export default {
  components: { ChatHeader, SearchBox, UsersList },
  setup() {
    const { user } = useGetUser();
    const { updateDoc } = useDoc("users", user.value.uid);
    const router = useRouter();
    const logout = async () => {
      await updateDoc({ status: false });
      await firebaseAuth.signOut();
      router.push({ name: "Login" });
    };

    return { logout };
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
