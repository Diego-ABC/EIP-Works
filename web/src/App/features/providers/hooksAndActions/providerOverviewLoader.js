import getProvider from "../services/getProvider";

export default async function providerOverviewLoader({ params }) {
  try {
    const { providerId } = params;
    const provider = await getProvider(providerId);
    return { provider };
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
}
