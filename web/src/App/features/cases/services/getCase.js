import { doc, getDoc, getFirestore } from "firebase/firestore";

export default async function getCase(caseId) {
  if (!caseId) throw new Error("no caseId");
  const caseRef = doc(getFirestore(), "cases/" + caseId);
  const caseSnap = await getDoc(caseRef);
  if (!caseSnap.exists()) throw new Error(`case ${caseId} not found`);
  return { id: caseSnap.id, ...caseSnap.data() };
}
