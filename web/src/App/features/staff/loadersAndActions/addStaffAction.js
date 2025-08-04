import getFormDataFromRequest from "@/lib/utils/forms/getFormDataFromRequest";
import addStaff from "../services/addStaff";
import sendInv from "../services/sendInvite";
import getInviteCodeForStaff from "../services/getInviteCodeForStaff";
import { redirect } from "react-router";

export default async function addStaffAction({ request }) {
  try {
    const formData = await getFormDataFromRequest(request);
    const { sendInvite } = formData;
    if (sendInvite) delete formData.sendInvite;
    const newStaffId = await addStaff(formData);
    if (sendInvite) {
      try {
        await sendInv(newStaffId);
      } catch (error) {
        console.log(error);
        // return {
        //   error:
        //     "emailing service down, please send attached link manually for account verification",
        //   link:
        //     location.hostname +
        //     "/invite/staff/" +
        //     (await getInviteCodeForStaff(newStaffId)),
        // };
      }
      return redirect("/staff");
    }
    return { success: "success" };
  } catch (error) {
    return { error: error.message };
  }
}
