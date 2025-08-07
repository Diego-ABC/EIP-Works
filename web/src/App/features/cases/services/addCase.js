import { doc, getFirestore } from "firebase/firestore";

export default async function addCase(caseData) {
  const newCaseRef = doc(collection(getFirestore(), "cases"));
  await setDoc(newCaseRef, caseData);
  return newCaseRef.id;
}
