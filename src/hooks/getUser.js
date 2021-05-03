import { ref } from "vue";
import { firebaseAuth } from "@/firebase/init";

const user = ref(null);
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

const useGetUser = () => {
  return { user };
};

export default useGetUser;
