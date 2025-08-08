import GridTable from "@/components/dataDisplay/GridTable/GridTable";

export default function DocsTable({ docs = [] }) {
  const headers = ["Date Uploaded", "Doc Date", "Description", "Download"];
  return (
    <GridTable className="grid-cols-[auto_auto_1fr_auto]">
      {[headers]}
    </GridTable>
  );
}
