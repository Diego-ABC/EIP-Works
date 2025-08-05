import { Link } from "react-router";

const headerCellClass =
  "border-b-2 border-r-2 border-r-white border-b-black last:border-r-black dark:border-b-white dark:border-r-black dark:last:border-r-white font-medium px-10 py-2 bg-black dark:bg-white text-white dark:text-black";
const cellClass =
  "border-b-2 border-r-2 border-black dark:border-white font-medium px-10 py-5 group-hover:bg-black/20 group-hover:dark:bg-white/20";

function StaffListTableHeader() {
  return (
    <div className="contents">
      <div className={headerCellClass}>Name</div>
      <div className={headerCellClass}>email</div>
      <div className={headerCellClass}>phone</div>
      <div className={headerCellClass}>registered?</div>
    </div>
  );
}
function StaffRow({
  staffer: { id, firstName, lastName, email, work, workExt, registered },
}) {
  return (
    <Link
      to={"/staff/" + id}
      // className="grid grid-cols-subgrid col-span-4 hover:bg-black/20"
      className="contents group"
    >
      <div className={cellClass}>
        {firstName} {lastName}
      </div>
      <div className={cellClass}>{email}</div>
      <div className={cellClass}>
        {work}
        {workExt ? "x" + workExt : ""}
      </div>
      <div
        className={
          cellClass +
          " " +
          (registered
            ? "bg-success-content dark:bg-success/50"
            : "bg-error-content dark:bg-error/70")
        }
      >
        {registered ? "registered" : "not registered"}
      </div>
    </Link>
  );
}

export default function StaffListTable({ staffList }) {
  return (
    <div className="grid grid-cols-4 border-t-2 border-l-2 border-black-400 w-fit min-w-[65rem] ">
      <StaffListTableHeader />
      {!!staffList.length &&
        staffList.map((staffer) => (
          <StaffRow staffer={staffer} key={staffer.id} />
        ))}
    </div>
  );
}
