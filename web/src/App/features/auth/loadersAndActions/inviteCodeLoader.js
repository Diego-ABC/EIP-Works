export default async function inviteCodeLoader({ params }) {
  const { inviteCode } = params;
  return { inviteCode };
}
