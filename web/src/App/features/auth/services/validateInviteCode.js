import { getFunctions, httpsCallable } from "firebase/functions";
export default async function validateInviteCode(inviteCode) {
  return (
    await httpsCallable(getFunctions(), "validateInviteCode")({ inviteCode })
  ).data;
}
