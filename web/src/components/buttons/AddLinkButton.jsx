import { Link } from "react-router";
import { PlusIcon } from "@phosphor-icons/react";

export default function AddLinkbutton({ href }) {
  return (
    <Link to={href} className="btn dark:btn-soft btn-success font-bold mb-5">
      Add
      <PlusIcon className="size-4" weight="bold" />
    </Link>
  );
}
