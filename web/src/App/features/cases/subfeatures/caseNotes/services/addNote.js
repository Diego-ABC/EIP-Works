import {
  collection,
  doc,
  getFirestore,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export default async function addNote({
  caseId,
  noteDate,
  userId,
  userName,
  noteContent,
  noteType,
}) {
  const noteRef = doc(collection(getFirestore(), "caseNotes"));
  await setDoc(noteRef, {
    caseId,
    noteDate,
    userId,
    userName,
    noteContent,
    noteType,
    createdAt: serverTimestamp(),
  });
  return noteRef.id;
}
