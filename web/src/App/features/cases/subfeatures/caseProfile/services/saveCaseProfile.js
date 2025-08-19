import { doc, getFirestore, collection, setDoc } from "firebase/firestore";

export default async function saveCaseProfile(caseData, caseId = undefined) {
  const caseRef = caseId
    ? doc(getFirestore(), "cases/" + caseId)
    : doc(collection(getFirestore(), "cases"));
  await setDoc(caseRef, caseData);
  return caseRef.id;
}
