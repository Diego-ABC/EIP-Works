import { doc, getDoc, getFirestore } from "firebase/firestore";

export default async function getProvider(providerId) {
  if (!providerId) throw new Error("no providerId");
  const providerRef = doc(getFirestore(), "providers/" + providerId);
  const providerSnap = await getDoc(providerRef);
  if (!providerSnap.exists()) throw new Error(`case ${providerId} not found`);
  return { id: providerSnap.id, ...providerSnap.data() };
}
