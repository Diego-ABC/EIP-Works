import getFormDataFromRequest from "@/lib/utils/forms/getFormDataFromRequest";
import { redirect } from "react-router";
import addDoc from "../services/addDoc";

export default async function newDocAction({ request, params }) {
  try {
    const { caseId } = params;
    const newDocData = await getFormDataFromRequest(request);
    // console.log(newDocData);
    // console.log(newDocData.docFile);
    await addDoc(newDocData, caseId);
    return redirect(`/cases/${caseId}/documents`);
  } catch (err) {
    return { error: err.message };
  }
}
