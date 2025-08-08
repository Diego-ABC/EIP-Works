import classMerge from "@/lib/utils/stylings/classMerge";
import GridTableCell from "./GridTableCell";
import { Link } from "react-router";

const whiteListColSpan = [
  "col-span-1",
  "col-span-2",
  "col-span-3",
  "col-span-4",
  "col-span-5",
  "col-span-6",
  "col-span-7",
  "col-span-8",
];
const defaultTableRowClass = "grid grid-cols-subgrid";
const linkRowClass = "hover:bg-black/20 hover:dark:bg-white/10";
export default function GridTableRow({
  linkTo = "",
  children,
  className = "",
}) {
  const rowClass = classMerge(
    className,
    defaultTableRowClass,
    linkTo ? linkRowClass : "cursor-default",
    whiteListColSpan[children?.length - 1 ?? 0]
  );

  return (
    <Link to={linkTo} className={rowClass}>
      {children?.map((child, i) =>
        typeof child === "string" ? (
          <GridTableCell key={i}>{child}</GridTableCell>
        ) : typeof child === "object" ? (
          <GridTableCell key={i} className={child.className}>
            {child.content}
          </GridTableCell>
        ) : (
          child
        )
      )}
    </Link>
  );
}
