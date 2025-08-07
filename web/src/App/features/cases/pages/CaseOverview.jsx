import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import { useLoaderData, Outlet } from "react-router";
// import { CaseProvider } from "../context/caseContext";
import { CaseProvider } from "../context/caseContext.jsx";
import CaseDetails from "../components/CaseDetails.jsx";
import TabLinks from "@/App/layout/TabLinks/index.jsx";

export default function CaseOverview() {
  const { case: eiCase, error } = useLoaderData();
  const { firstName, lastName } = eiCase;
  const subpageLinks = [
    {
      href: "profile",
      name: "Profile",
    },
    {
      href: "authorizations",
      name: "Authorizations",
    },
    {
      href: "documents",
      name: "Documents",
    },
  ];
  return (
    <CaseProvider initialCase={eiCase}>
      <DashboardHeader>
        Cases {">"} {firstName} {lastName}
      </DashboardHeader>
      <CaseDetails />
      <TabLinks className="mt-3" links={subpageLinks} />
      <Outlet />
    </CaseProvider>
  );
}
