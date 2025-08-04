import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();
export default async function getStaffMember(staffId) {
  const staffSnap = await getDoc(doc(db, "staff/" + staffId));
  if (!staffSnap.exists())
    throw new Error("no staff member with id " + staffId);
  return { id: staffId, ...staffSnap.data() };
}
