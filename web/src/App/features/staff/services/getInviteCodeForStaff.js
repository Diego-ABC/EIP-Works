import { getDoc, getFirestore, doc } from "firebase/firestore";

const db = getFirestore();
export default async function getInviteCodeForStaff(staffId) {
  if (!staffId) throw new Error("no staffId found");
  const staffRef = doc(db, `staff/${staffId}`);
  const staffSnap = await getDoc(staffRef);
  if (!staffSnap.exists) throw new Error("no object at staff/" + staffId);
  const { inviteCode } = staffSnap.data();
  return inviteCode;
}
