import { doc, getFirestore, getDoc } from "firebase/firestore";

export default async function getAuthData(authId) {
  if (!authId) throw new Error("no authId");
  const authRef = doc(getFirestore(), "authorizations/" + authId);
  const authSnap = await getDoc(authRef);
  if (!authSnap.exists()) throw new Error(`authorization ${authId} not found`);
  return { id: authSnap.id, ...authSnap.data() };
}
