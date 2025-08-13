import AddLinkbutton from "@/components/buttons/AddLinkButton";
import DocsTable from "../components/DocsTable";
import { useLoaderData } from "react-router";

export default function CaseDocuments() {
  const { docs, error } = useLoaderData();
  console.log(error);
  return (
    <div className="p-3 min-w-full w-max">
      <AddLinkbutton href="new" />
      <DocsTable docs={docs} />
    </div>
  );
}
