import getFormDataFromRequest from "@/lib/utils/forms/getFormDataFromRequest";
import addCase from "../services/addCase";
import { redirect } from "react-router";

export default async function newCaseAction({ request }) {
  try {
    console.log("anything?");
    const newCaseData = await getFormDataFromRequest(request);
    const newCaseId = await addCase(newCaseData);
    console.log("should redirect here");
    return redirect("/cases/" + newCaseId);
  } catch (err) {
    return { error: err.message };
  }
}
