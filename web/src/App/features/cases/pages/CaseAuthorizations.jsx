import GridTable from "@/components/dataDisplay/GridTable/GridTable";
import { useLoaderData } from "react-router";
import CaseAuthorizationsTable from "../components/CaseAuthorizationsTable";
import AddLinkbutton from "@/components/buttons/AddLinkButton";

export default function CaseAuthorizations() {
  const { auths, error } = useLoaderData();
  if (error) return <div className="font-medium text-error">{error}</div>;

  return (
    <div className="p-3 w-max">
      <AddLinkbutton href={"new"} />
      <CaseAuthorizationsTable auths={auths} />
    </div>
  );
}
