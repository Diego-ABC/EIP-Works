import classMerge from "@/lib/utils/stylings/classMerge";

export default function SectionTitle({ children, className }) {
  return (
    <h2 className={classMerge(className, "font-bold text-xl")}>{children}</h2>
  );
}
