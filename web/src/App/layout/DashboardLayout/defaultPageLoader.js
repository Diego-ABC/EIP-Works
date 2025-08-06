import { redirect } from "react-router";

export default async function defaultPageLoader() {
  // This method can be refactored to allow a user to define their "home page"
  // The loader can be removed altogether, if a "home page" is ever defined
  // by default we'll load /cases since its at the top of the navpane
  return redirect("/cases");
}
