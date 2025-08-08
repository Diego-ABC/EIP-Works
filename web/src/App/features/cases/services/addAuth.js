import {
  arrayUnion,
  doc,
  getFirestore,
  runTransaction,
  collection,
} from "firebase/firestore";

export default async function addAuth(authData) {
  // form data validation here I guess
  if (!authData.authNumber || !authData.caseId)
    throw new Error("no auth number in data");
  const db = getFirestore();
  const { caseId } = authData;
  const newAuthRef = doc(collection(db, "authorizations"));
  const caseRef = doc(db, "cases/" + caseId);

  await runTransaction(db, async (transaction) => {
    const caseSnap = await transaction.get(caseRef);
    if (!caseSnap.exists()) throw new Error(`case id ${caseId} not found`);

    transaction.update(caseRef, {
      authorizations: arrayUnion(authData.authNumber),
    });
    transaction.set(newAuthRef, authData);
  });

  // await setDoc(newAuthRef, {
  //   ...staffData,
  //   registered: false,
  //   disabled: false,
  // });
  return newAuthRef.id;
}
