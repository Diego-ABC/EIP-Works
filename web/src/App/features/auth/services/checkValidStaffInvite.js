import { getDoc, getFirestore, doc } from "firebase/firestore";
export default async function checkValidStaffInvite(invCode) {
  const codeSnap = await getDoc(doc(getFirestore(), "staffInvites/" + invCode));
  if (!codeSnap.exists()) return false;
  return codeSnap.data();
}
