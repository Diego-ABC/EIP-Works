import getCaseNotes from "../services/getCaseNotes";

export default async function caseNotesLoader({ params }) {
  try {
    const { caseId } = params;
    return { notes: await getCaseNotes(caseId) };
  } catch (err) {
    return { error: err.message };
  }
}
