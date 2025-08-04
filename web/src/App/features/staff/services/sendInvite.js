import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();
export default async function sendInvite(staffId) {
  const inviteCode = await httpsCallable(
    functions,
    "sendInviteEmail"
  )({ staffId });
  return inviteCode;
}
