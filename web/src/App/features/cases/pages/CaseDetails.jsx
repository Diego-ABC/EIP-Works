import { useLoaderData } from "react-router";

export default function CaseDetails() {
  const { case: eiCase, error } = useLoaderData();
  return <>{eiCase.id}</>;
}
