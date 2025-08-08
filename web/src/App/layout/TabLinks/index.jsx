import classMerge from "@/lib/utils/stylings/classMerge";
import { NavLink } from "react-router";

export default function TabLinks({ className, links = [] }) {
  return (
    <div className={classMerge(className, "flex flex-row")}>
      <div className="w-4 border-b-2 border-b-black dark:border-b-white"></div>
      <div className="grid grid-cols-3 items-end">
        {links.map(({ href, name }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              "grow border-black dark:border-white first:border-l-2 border-t-2 justify-center flex flex-row px-4 font-medium group-first:border-l-2" +
              (isActive
                ? " border-b-0 pb-3 pt-3 border-l-2 border-r-2"
                : " bg-primary/20 dark:bg-primary py-2 border-b-2 border-r-2 [&:has(+*.pt-3)]:border-r-0")
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
