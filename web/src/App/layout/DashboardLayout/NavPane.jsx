import Exit from "@/assets/icons/Exit";
import DarkModeToggle from "./DarkModeToggle";
import {
  AddressBookTabsIcon,
  FinnTheHumanIcon,
  IdentificationCardIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router";
import NavLink from "./NavLink";

const rootRoutes = [
  {
    href: "/",
    name: "Cases",
    Icon: AddressBookTabsIcon,
  },
  {
    href: "/providers",
    name: "Providers",
    Icon: IdentificationCardIcon,
  },
  {
    href: "/staff",
    name: "Staff",
    Icon: FinnTheHumanIcon,
  },
];
<AddressBookTabsIcon />;

export default function NavPane({ className }) {
  return (
    <div
      className={[className, "h-full bg-base-300 flex flex-col p-5 gap-4"].join(
        " "
      )}
    >
      {rootRoutes.map((route) => (
        <NavLink key={route.href} linkData={route} />
      ))}
      <div className="flex flex-row w-full mt-auto gap-2">
        <Link to="/signin" className="btn btn-warning font-bold">
          <Exit /> Sign Out
        </Link>
        <DarkModeToggle />
      </div>
    </div>
  );
}
