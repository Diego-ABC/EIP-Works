import { useEffect, useState } from "react";
import getStaffList from "../services/getStaffList";
import StaffListHeader from "../components/StaffListHeader";
import { Link } from "react-router";
import { PlusIcon } from "@phosphor-icons/react";
import StaffListTable from "../components/StaffListTable";

export default function StaffList() {
  const [staffList, setStaffList] = useState([]);
  useEffect(() => {
    getStaffList().then(setStaffList);
  }, []);
  return (
    <>
      <StaffListHeader>Staff</StaffListHeader>

      <Link to="new" className="btn dark:btn-soft btn-success font-bold mb-5">
        Add
        <PlusIcon className="size-4" weight="bold" />
      </Link>
      <StaffListTable staffList={staffList} />
    </>
  );
}
