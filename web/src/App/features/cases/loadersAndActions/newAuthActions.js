import getFormDataFromRequest from "@/lib/utils/forms/getFormDataFromRequest";
import { redirect } from "react-router";
import addAuth from "../services/addAuth";

export default async function newAuthAction({ request, params }) {
  try {
    const { caseId } = params;
    const authData = await getFormDataFromRequest(request);
    authData.caseId = caseId;
    return redirect("../" + (await addAuth(authData)));
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
}
