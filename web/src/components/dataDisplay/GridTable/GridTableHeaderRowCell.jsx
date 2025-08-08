import classMerge from "@/lib/utils/stylings/classMerge";

const headerCellClass =
  "border-b-2 border-r-2 border-r-white border-b-black last:border-r-black dark:border-b-white dark:border-r-black dark:last:border-r-white font-medium px-10 py-2 bg-black dark:bg-white text-white dark:text-black text-nowrap min-w-fit";
export default function GridTableHeaderRowCell({ className = "", children }) {
  return (
    <div className={classMerge(className, headerCellClass)}>{children}</div>
  );
}
