// import { useLocation } from "react-router";

export default function StaffListHeader({ children }) {
  // const { pathname } = useLocation();
  // const paths = ["Staff"];
  return (
    <div className="flex flex-row gap-3 items-end mb-10">
      <h1 className="text-3xl font-semibold">{children}</h1>
    </div>
  );
}
