import { redirect } from "react-router";

export default async function providerOverviewRedirectLoader() {
  return redirect("profile");
}
