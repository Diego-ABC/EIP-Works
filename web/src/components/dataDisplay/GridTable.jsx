import GridTableRow from "./GridTableRow";
import GridTableHeaderRow from "./GridTableHeaderRow";
import classMerge from "@/lib/utils/stylings/classMerge";

const whiteListGridCols = [
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
  "grid-cols-6",
  "grid-cols-7",
  "grid-cols-8",
];
export default function GridTable({ className, cols, children }) {
  const header = children[0];
  const body = children.slice(1);
  return (
    <div
      className={classMerge(
        className,
        whiteListGridCols[cols - 1],
        "grid border-t-2 border-l-2 border-black-400"
      )}
    >
      {Array.isArray(header) ? (
        <GridTableHeaderRow>{header}</GridTableHeaderRow>
      ) : (
        header
      )}
      {body.map((row, i) =>
        Array.isArray(row) ? <GridTableRow key={i}>{row}</GridTableRow> : row
      )}
    </div>
  );
}
