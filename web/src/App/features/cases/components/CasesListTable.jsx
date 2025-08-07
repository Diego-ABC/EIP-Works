// function CaseListRow(){
//   return
// }

import GridTable from "@/components/dataDisplay/GridTable/GridTable";

export default function CasesListTable({
  headers = [],
  cases = [],
  className,
}) {
  // const headerData = ["test1", "test2"];
  // const row1 = ["td1", "td2"];
  return (
    <GridTable cols={headers.length} className="w-fit">
      {[headers, ...cases]}
    </GridTable>
  );
}
