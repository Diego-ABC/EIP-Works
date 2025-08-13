import getCaseDocs from "../services/getCaseDocs";

export default async function caseDocsLoader({ params }) {
  try {
    const { caseId } = params;
    return { docs: await getCaseDocs(caseId) };
  } catch (err) {
    return { error: err.message };
  }
}
