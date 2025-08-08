import getAuthData from "../services/getAuthData";

export default async function authDetailsLoader({ params }) {
  try {
    const { authId } = params;
    return { authData: await getAuthData(authId) };
  } catch (err) {
    return { error: err.message };
  }
}
