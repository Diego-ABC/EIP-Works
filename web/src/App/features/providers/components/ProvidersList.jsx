import GridTable from "@/components/dataDisplay/GridTable/GridTable";
export default function ProvidersList({
  headers = [],
  providers = [],
  className,
}) {
  // const headerData = ["test1", "test2"];
  // const row1 = ["td1", "td2"];
  return (
    <GridTable cols={headers.length} className="min-w-full w-fit ">
      {[headers, ...providers]}
    </GridTable>
  );
}
