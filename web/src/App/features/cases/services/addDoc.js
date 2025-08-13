// dateUploaded,
//   docDate,
//   description,

import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// docFile
export default async function addDoc(
  { dateUploaded, docDate, description = "noDescription", docFile },
  caseId
) {
  if (!caseId) throw new Error("no caseId given to addDoc()");
  const docDbRef = doc(
    collection(getFirestore(), "cases/" + caseId + "/documents")
  );
  const docId = docDbRef.id;

  const docStorageRef = ref(getStorage(), `caseDocs/${caseId}/${docId}`);
  await uploadBytes(docStorageRef, docFile, { contentType: docFile.type });
  const downloadUrl = await getDownloadURL(docStorageRef);

  await setDoc(docDbRef, {
    dateUploaded,
    docDate,
    description,
    downloadUrl,
  });
}
