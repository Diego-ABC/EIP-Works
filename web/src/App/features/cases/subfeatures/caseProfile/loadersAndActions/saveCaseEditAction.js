import getFormDataFromRequest from "@/lib/utils/forms/getFormDataFromRequest";
import saveCaseProfile from "../services/saveCaseProfile";

export default async function saveCaseEditAction({ request, params }) {
  try {
    const { caseId } = params;
    const caseData = await getFormDataFromRequest(request);
    await saveCaseProfile(caseData, caseId);
    return { success: true };
  } catch (err) {
    return { error: message };
  }
}
