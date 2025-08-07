import classMerge from "@/lib/utils/stylings/classMerge";
import { NavLink } from "react-router";

export default function TabLinks({ className, links = [] }) {
  return (
    <div className={classMerge(className, "flex flex-row")}>
      <div className="w-4 border-b-2 border-b-black dark:border-b-white"></div>
      <div className="grid grid-cols-3">
        {links.map(({ href, name }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              "border-black dark:border-white border-2 justify-center flex flex-row px-4 py-2 font-medium not-first:border-l-0" +
              (isActive ? " border-b-0" : " bg-primary/20 dark:bg-primary")
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
      <div className="grow border-b-2 border-b-black dark:border-b-white"></div>
    </div>
  );
}
