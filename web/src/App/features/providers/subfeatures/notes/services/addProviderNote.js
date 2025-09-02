import {
  collection,
  doc,
  getFirestore,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export default async function addProviderNote({
  providerId,
  noteDate,
  userId,
  userName,
  noteContent,
  noteType,
}) {
  const noteRef = doc(collection(getFirestore(), "providerNotes"));
  await setDoc(noteRef, {
    providerId,
    noteDate,
    userId,
    userName,
    noteContent,
    noteType: JSON.parse(noteType),
    createdAt: serverTimestamp(),
  });
  return noteRef.id;
}
