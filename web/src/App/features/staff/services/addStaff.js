import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const db = getFirestore();
export default async function addStaff(staffData) {
  const newStaffRef = doc(collection(db, "staff"));
  await setDoc(newStaffRef, {
    ...staffData,
    registered: false,
    disabled: false,
  });
  return newStaffRef.id;
}
