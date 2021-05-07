import { db } from "@/firebase/init";
import { ref } from "vue";
import { useRouter } from "vue-router";

const useDoc = (collection, id) => {
  const item = ref(null);
  const error = ref(null);
  const router = useRouter();
  let docRef = db.collection(collection).doc(id);
  const updateDoc = async (updates) => {
    error.value = null;
    try {
      await docRef.update(updates);
    } catch (err) {
      error.value = err;
    }
  };
  const getDoc = async () => {
    error.value = null;
    try {
      const doc = await docRef.get();
      if (!doc.data()) {
        router.push("/chat");
        throw new Error("The data not found");
      }
      item.value = { ...doc.data(), uid: doc.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  const setDoc = async (data) => {
    error.value = null;
    try {
      await docRef.set(data);
    } catch (err) {
      error.value = err;
    }
  };
  return { updateDoc, getDoc, setDoc, item, error };
};

export default useDoc;
