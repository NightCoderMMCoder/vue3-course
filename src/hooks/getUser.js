import { ref } from "vue";
import { firebaseAuth } from "@/firebase/init";

const useGetUser = () => {
  const user = ref({
    uid: firebaseAuth.currentUser.uid,
    name: firebaseAuth.currentUser.displayName,
    email: firebaseAuth.currentUser.email,
  });
  firebaseAuth.onAuthStateChanged((_user) => {
    if (_user) {
      let newUser = {
        name: _user.displayName,
        email: _user.email,
        uid: _user.uid,
      };
      user.value = newUser;
    } else {
      user.value = null;
    }
    // user.value = _user;
  });
  return { user };
};

export default useGetUser;
