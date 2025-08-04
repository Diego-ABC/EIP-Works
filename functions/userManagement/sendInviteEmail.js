import { getFirestore } from "firebase-admin/firestore";
import { onCall, HttpsError } from "firebase-functions/https";
import { defineSecret } from "firebase-functions/params";
import { welcomeTemplateId } from "../mailersend/emailTemplateIds.js";
import sendEmail from "../mailersend/sendEmail.js";

const MAILERSEND_SEND_KEY = defineSecret("MAILERSEND_SEND_KEY");
export const sendInviteEmail = onCall(
  { secrets: [MAILERSEND_SEND_KEY] },
  async ({ data, auth }) => {
    if (!auth)
      throw new HttpsError("unauthenticated", "User must be signed in");

    const { staffId } = data;
    if (!staffId) throw new HttpsError("not-found", "no staffId given");

    const db = getFirestore();
    const staffObjRef = db.doc("staff/" + staffId);
    const staffObjSnap = await staffObjRef.get();
    if (!staffObjSnap.exists)
      throw new HttpsError("not-found", `staff/${staffId} does not exist`);

    const { registered, disabled, inviteCode, email, firstName, lastName } =
      staffObjSnap.data();
    if (registered || disabled)
      throw new HttpsError(
        "failed-precondition",
        `staff/${staffId} already registered or login disabled`
      );

    const newInviteRef = db.collection(`staffInvites`).doc();
    const newInviteCode = newInviteRef.id;
    try {
      await db.runTransaction(async (transaction) => {
        if (inviteCode) {
          const oldInviteRef = db.doc(`staffInvites/${inviteCode}`);
          transaction.delete(oldInviteRef);
        }

        transaction.set(newInviteRef, { email, staffId });
        transaction.update(staffObjRef, { inviteCode: newInviteCode });
      });
    } catch (err) {
      throw new HttpsError("aborted", err.message);
    }
    try {
      const domain = process.env.MAILERSEND_DOMAIN;
      await sendEmail({
        emailVars: {
          name: firstName,
          organization: "New Path Services",
          org_support_email: "diegoc@newpathsvcs.com",
          invite_code: newInviteCode,
        },
        from: {
          email: "noreply@" + domain,
          name: "EIP Works",
        },
        to: {
          email,
          name: `${firstName} ${lastName}`,
        },
        subject: "Welcome to EIPWorks!",
        templateId: welcomeTemplateId,
      });
    } catch (err) {
      // throw new HttpsError("aborted", err.message);
      console.err(err);
    }
    return newInviteCode;
  }
);
