import { GitPullRequestIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function FeatureRequestLink() {
  return (
    <Link
      className="card border-2 border-success bg-success-content hover:ring-2 ring-success transition-shadow"
      to="feature-request"
    >
      <div className="card-body">
        <div className="card-title text-bold text-2xl">
          <GitPullRequestIcon size={42} />
          Request a Feature
        </div>
        <p className="font-semibold pr-5">
          Suggest a new feature or improvement to the site
        </p>
      </div>
    </Link>
  );
}
