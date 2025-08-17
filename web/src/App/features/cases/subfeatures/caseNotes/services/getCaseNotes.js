import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export default async function getCaseNotes(caseId) {
  const q = query(
    collection(getFirestore(), "caseNotes"),
    where("caseId", "==", caseId),
    orderBy("noteDate"),
    orderBy("createdAt")
  );
  const notesSnap = await getDocs(q);
  if (notesSnap.empty) return [];
  return notesSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
