import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function TaskTrackerLink() {
  return (
    <Link
      to="https://www.notion.so/Public-Roadmap-256c56813bff80d6aa91c20bf8449297?source=copy_link"
      className="card col-span-full border-2 border-info-content bg-info hover:ring-2 ring-info-content transition-shadow"
      target="_blank"
    >
      <div className="card-body">
        <div className="card-title text-bold text-2xl">
          <ArrowSquareOutIcon size={42} />
          Track Tickets
        </div>
        <p className="font-semibold pr-5">
          View all site tickets and their status
        </p>
      </div>
    </Link>
  );
}
