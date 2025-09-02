import getFormDataFromRequest from "@/lib/utils/forms/getFormDataFromRequest";
import addProvider from "../services/addProvider";
import { redirect } from "react-router";

export default async function newProviderAction({ params, request }) {
  try {
    const providerData = await getFormDataFromRequest(request);
    providerData.disciplines = JSON.parse(providerData.disciplines);
    providerData.zipCodes = JSON.parse(providerData.zipCodes);
    console.log(providerData);
    const newProviderId = await addProvider(providerData);
    console.log(newProviderId);
    return redirect("/providers/" + newProviderId);
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
}
