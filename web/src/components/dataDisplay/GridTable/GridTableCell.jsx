import classMerge from "@/lib/utils/stylings/classMerge";

const cellClass =
  "flex flex-row items-center border-b-2 border-r-2 border-black dark:border-white font-medium px-6 py-3 group-hover:bg-black/20 group-hover:dark:bg-white/20";

export default function GridTableCell({ children, className = "" }) {
  return <div className={classMerge(className, cellClass)}>{children}</div>;
}
