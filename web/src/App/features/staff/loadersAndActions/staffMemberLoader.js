import { redirect } from "react-router";
import getStaffMember from "../services/getStaffMember";

export default async function staffMemberLoader({ params }) {
  const { staffId } = params;
  try {
    const staffData = await getStaffMember(staffId);
    return staffData;
  } catch ({ message: error }) {
    console.log(error);
    return redirect("/staff");
  }
}
