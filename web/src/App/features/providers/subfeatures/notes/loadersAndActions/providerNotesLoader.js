// import getCaseNotes from "../services/getCaseNotes";

import getProviderNotes from "../services/getProviderNotes";

export default async function providerNotesLoader({ params }) {
  try {
    const { providerId } = params;
    // return { notes: [] };
    return { notes: await getProviderNotes(providerId) };
  } catch (err) {
    return { error: err.message };
  }
}
