import { TrayArrowDownIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router";

export default function FeatureRequestNavLink({ className = "" }) {
  return (
    <NavLink
      className={
        "btn btn-info justify-start px-3 text-xl text-left" + " " + className
      }
      to="feedback"
    >
      <TrayArrowDownIcon size={32} /> Feedback
    </NavLink>
  );
}
