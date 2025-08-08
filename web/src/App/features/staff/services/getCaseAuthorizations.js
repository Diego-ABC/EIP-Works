import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default async function getCaseAuthorizations(caseId) {
  if (!caseId) throw new Error("no caseId given");
  const q = query(
    collection(getFirestore(), "authorizations"),
    where("caseId", "==", caseId)
  );
  const authsSnap = await getDocs(q);
  if (authsSnap.empty) return [];
  return authsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
