import { useLoaderData } from "react-router";
import AuthDetails from "../components/AuthDetails";

export default function AuthDetailsPage() {
  const { authData, error } = useLoaderData();

  if (error) return <>{error}</>;
  return <AuthDetails authData={authData} />;
}
