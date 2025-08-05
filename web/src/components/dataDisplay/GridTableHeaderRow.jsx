import classMerge from "@/lib/utils/stylings/classMerge";
import GridTableHeaderRowCell from "./GridTableHeaderRowCell";

// const whiteListColSpan = [
//   'col-span-1',
//   'col-span-2',
//   'col-span-3',
//   'col-span-4',
//   'col-span-5',
//   'col-span-6',
//   'col-span-7',
//   'col-span-8',
// ]
export default function GridTableHeaderRow({ className, children }) {
  return (
    <div className={classMerge(className, "contents")}>
      {children.map((child, i) =>
        typeof child === "string" ? (
          <GridTableHeaderRowCell key={i}>{child}</GridTableHeaderRowCell>
        ) : (
          child
        )
      )}
    </div>
  );
}
