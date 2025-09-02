import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import ProviderForm from "../components/ProviderForm";
import { useActionData } from "react-router";

export default function NewProviderPage() {
  const { success, error } = useActionData() || {};

  return (
    <div className="@container w-full">
      <DashboardHeader>Providers {">"} New</DashboardHeader>
      <ProviderForm containerClassName="w-full" />
      {success && <span className="text-success">{success}</span>}
      {error && <span className="text-error">{error}</span>}
    </div>
  );
}
