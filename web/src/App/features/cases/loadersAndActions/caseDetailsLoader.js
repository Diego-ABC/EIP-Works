import getCase from "../services/getCase";

export default async function caseDetailsLoader({ params }) {
  try {
    const { caseId } = params;
    return { case: await getCase(caseId) };
  } catch (err) {
    return { error: err.message };
  }
}
