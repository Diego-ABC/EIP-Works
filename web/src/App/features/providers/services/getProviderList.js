import { collection, getDocs, getFirestore } from "firebase/firestore";

export default async function getProviderList() {
  const providersRef = collection(getFirestore(), "providers");
  const providersSnap = await getDocs(providersRef);
  if (providersSnap.empty) return [];
  return providersSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
