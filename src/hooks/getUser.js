import { ref } from "vue";
import { firebaseAuth } from "@/firebase/init";

const user = ref(null);
firebaseAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const useGetUser = () => {
  return { user };
};

export default useGetUser;
