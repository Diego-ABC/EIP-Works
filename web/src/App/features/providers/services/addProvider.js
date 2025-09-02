import { doc, getFirestore, collection, setDoc } from "firebase/firestore";

export default async function addProvider(providerData) {
  const newProviderRef = doc(collection(getFirestore(), "providers"));
  await setDoc(newProviderRef, providerData);
  return newProviderRef.id;
}
