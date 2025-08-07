import { collection, getDocs, getFirestore } from "firebase/firestore";

export default async function getCasesList() {
  const casesRef = collection(getFirestore(), "cases");
  const casesSnap = await getDocs(casesRef);
  if (casesSnap.empty) return [];
  return casesSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
