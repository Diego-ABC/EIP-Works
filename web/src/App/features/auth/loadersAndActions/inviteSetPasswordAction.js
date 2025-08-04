import getFormDataFromRequest from "@/lib/utils/forms/getFormDataFromRequest";
import createPasswordForInvite from "../services/createPasswordForInvite";
import { login } from "../services";
import { redirect } from "react-router";

export default async function inviteSetPasswordAction({ request, params }) {
  const { password, email } = await getFormDataFromRequest(request);
  const { inviteCode } = params;
  try {
    await createPasswordForInvite({ inviteCode, password });
    await login({ email, password });
    return redirect("/");
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
}
