import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

export default async function getCaseDocs(caseId) {
  const docsRef = collection(getFirestore(), `cases/${caseId}/documents`);
  const docsSnap = await getDocs(docsRef);
  if (docsSnap.empty) return [];
  return docsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
