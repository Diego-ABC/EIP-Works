import classMerge from "@/lib/utils/stylings/classMerge";

const cellClass =
  "border-b-2 border-r-2 border-black dark:border-white font-medium px-10 py-5 group-hover:bg-black/20 group-hover:dark:bg-white/20";

export default function GridTableCell({ children, className = "" }) {
  return <div className={classMerge(className, cellClass)}>{children}</div>;
}
