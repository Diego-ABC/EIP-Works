import { getFirestore } from "firebase-admin/firestore";
import { onCall } from "firebase-functions/https";

// checks a given invite code and returns the staff data associated with it or an error message
export const validateInviteCode = onCall(async ({ data }) => {
  const { inviteCode } = data;
  try {
    const db = getFirestore();
    const inviteRef = db.doc("staffInvites/" + inviteCode);
    const inviteSnap = await inviteRef.get();
    if (!inviteSnap.exists) throw new Error("invite code not found");

    const { staffId } = inviteSnap.data();
    const staffRef = db.doc("staff/" + staffId);
    const staffSnap = await staffRef.get();
    if (!staffSnap.exists) throw new Error(`staff id ${staffId} not found`);
    console.log(staffSnap.data());
    return { staffData: staffSnap.data() };
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
});
