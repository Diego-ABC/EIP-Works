import Exit from "@/assets/icons/Exit";
import DarkModeToggle from "./DarkModeToggle";
import {
  AddressBookTabsIcon,
  BabyIcon,
  // CalendarIcon,
  CircuitryIcon,
  FinnTheHumanIcon,
  IdentificationCardIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router";
import NavLink from "./NavLink";
import FeatureRequestNavLink from "@/App/features/feedback/components/FeedbackPageNavlink";
// import DatePicker from "@/components/formComponents/DatePicker";
// import TextInputField from "@/components/formComponents/TextInputField";
// import textFieldStyle from "@/components/formComponents/textFieldStyle";

const rootRoutes = [
  {
    href: "/cases",
    name: "Cases",
    Icon: BabyIcon,
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
  {
    href: "/directory",
    name: "Directory",
    Icon: AddressBookTabsIcon,
  },
  { href: "/staffing", name: "Staffing", Icon: CircuitryIcon },
];
{
  /* <AddressBookTabsIcon />; */
}

export default function NavPane({ className }) {
  return (
    <div
      className={[
        className,
        "hidden h-full bg-base-300 md:flex flex-col p-5 gap-4",
      ].join(" ")}
    >
      {rootRoutes.map((route) => (
        <NavLink key={route.href} linkData={route} />
      ))}
      {/* <DatePicker /> */}
      {/* <TextInputField type="date" />
      <label className={textFieldStyle}>
        <input type="text" placeholder="mm/dd/yyyy" />
        <button>
          <CalendarIcon />
        </button>
      </label> */}
      <FeatureRequestNavLink className="mt-auto" />
      <div className="flex flex-row w-full gap-1">
        <Link to="/signin" className="btn btn-warning font-bold rounded-r-none">
          <Exit /> Sign Out
        </Link>
        <DarkModeToggle className="rounded-l-none" />
      </div>
    </div>
  );
}
