import getCaseAuthorizations from "../../staff/services/getCaseAuthorizations";

export default async function caseAuthorizationsLoader({ params }) {
  try {
    const { caseId } = params;
    const auths = await getCaseAuthorizations(caseId);
    return { auths };
  } catch (err) {
    return { error: err.message };
  }
}
