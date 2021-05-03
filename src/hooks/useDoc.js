import { db } from "@/firebase/init";
import { ref } from "vue";

const useDoc = (collection, id) => {
  const item = ref(null);
  let docRef = db.collection(collection).doc(id);
  const updateDoc = async (updates) => {
    await docRef.update(updates);
  };
  const getDoc = async () => {
    const doc = await docRef.get();
    item.value = { ...doc.data(), uid: doc.id };
  };
  return { updateDoc, getDoc, item };
};

export default useDoc;
