import { db } from "@/firebase/init";

const useDoc = (collection, id) => {
  const updateDoc = async (updates) => {
    let docRef = db.collection(collection).doc(id);
    await docRef.update(updates);
  };
  return { updateDoc };
};

export default useDoc;
