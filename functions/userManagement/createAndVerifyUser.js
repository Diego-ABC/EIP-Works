import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { HttpsError, onCall } from "firebase-functions/https";
import { defineSecret } from "firebase-functions/params";

const MAILERSEND_SEND_KEY = defineSecret("MAILERSEND_SEND_KEY");
export const createAndVerifyUser = onCall(
  { secrets: [MAILERSEND_SEND_KEY] },
  async ({ data, auth }) => {
    if (!auth)
      throw new HttpsError("unauthenticated", "User must be signed in");
    const { inviteCode, password } = data;

    const db = getFirestore();
    const inviteRef = db.doc("staffInvites/" + inviteCode);
    const inviteSnapshot = await inviteRef.get();
    if (!inviteSnapshot.exists) throw new HttpsError("invalid-argument", "");

    const { email, staffId, userName } = inviteSnapshot.data();
    await getAuth().createUser({
      uid: staffId,
      email,
      password,
      emailVerified: true,
      displayName: userName,
    });

    const staffRef = db.doc("staff/" + staffId);
    try {
      await db.runTransaction(async (transaction) => {
        transaction.delete(inviteRef);
        transaction.update(staffRef, {
          inviteCode: FieldValue.delete(),
          registered: true,
        });
      });
    } catch (err) {
      throw new HttpsError("aborted", err.message);
    }
  }
);
