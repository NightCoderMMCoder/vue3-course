import { db } from "@/firebase/init";
import { ref } from "vue";

const useDoc = (collection, id) => {
  const item = ref(null);
  const error = ref(null);
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
    const doc = await docRef.get();
    item.value = { ...doc.data(), uid: doc.id };
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
