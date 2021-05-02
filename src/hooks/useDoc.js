import { db } from "@/firebase/init";

const useDoc = (collection, id) => {
  const updateDoc = async (updates) => {
    let collectionRef = db.collection(collection).doc(id);
    await collectionRef.update(updates);
  };
  return { updateDoc };
};

export default useDoc;
