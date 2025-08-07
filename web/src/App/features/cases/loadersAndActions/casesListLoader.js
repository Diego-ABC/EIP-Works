import getCasesList from "../services/getCasesList";

export default async function casesListLoader({ request }) {
  //TODO: use request params to query cases data
  try {
    return { cases: await getCasesList() };
  } catch (err) {
    return { error: err.message };
  }
}
