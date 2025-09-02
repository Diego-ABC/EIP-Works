import getProviderList from "../services/getProviderList";

export default async function providerListLoader() {
  //TODO: use request params to query cases data
  try {
    return { providers: await getProviderList() };
  } catch (err) {
    return { error: err.message };
  }
}
