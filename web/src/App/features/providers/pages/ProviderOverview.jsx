import TabLinks from "@/App/layout/TabLinks";
import { ProviderProvider } from "../contexts/providerContext";
import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import { Outlet, useLoaderData } from "react-router";

export default function ProviderOverview() {
  const { provider, error } = useLoaderData();
  const { firstName, lastName } = provider;
  const subpageLinks = [
    {
      href: "profile",
      name: "Profile",
    },
    {
      href: "cases",
      name: "Cases",
    },
    {
      href: "documents",
      name: "Documents",
    },
    {
      href: "notes",
      name: "Notes",
    },
  ];
  return (
    <ProviderProvider initialProvider={provider}>
      <DashboardHeader>
        Providers {">"} {firstName} {lastName}
      </DashboardHeader>
      {/* <CaseDetails /> */}
      <TabLinks
        className="mt-3"
        bgColor="bg-info/60 dark:bg-info/80 hover:bg-info dark:hover:bg-info"
        links={subpageLinks}
      />
      <div className="py-5">
        <Outlet />
      </div>
    </ProviderProvider>
  );
}
