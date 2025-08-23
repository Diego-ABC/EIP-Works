import { BugIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function BugReportLink() {
  return (
    <Link
      className="card border-2 border-error bg-error-content hover:ring-2 ring-error transition-shadow"
      to="bug-report"
    >
      <div className="card-body">
        <div className="card-title text-bold text-2xl">
          <BugIcon size={40} />
          Report a Bug
        </div>

        <p className="font-semibold pr-5">
          Document an issue you've encountered
        </p>
      </div>
    </Link>
  );
}
