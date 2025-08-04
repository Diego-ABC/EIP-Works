import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();
export default async function createPasswordForInvite({
  inviteCode,
  password,
}) {
  await httpsCallable(
    functions,
    "createAndVerifyUser"
  )({ inviteCode, password });
}
