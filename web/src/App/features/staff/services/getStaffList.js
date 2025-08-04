import { collection, getDocs, getFirestore, query } from "firebase/firestore";

const db = getFirestore();
export default async function getStaffList() {
  const staffRef = collection(db, "staff");
  const staffSnap = await getDocs(staffRef);
  if (staffSnap.empty) return [];
  return staffSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
