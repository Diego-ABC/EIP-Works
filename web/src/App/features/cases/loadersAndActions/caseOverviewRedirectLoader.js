import { redirect } from "react-router";

export default async function caseOverviewRedirectLoader() {
  return redirect("profile");
}
