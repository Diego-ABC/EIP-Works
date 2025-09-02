import classMerge from "@/lib/utils/stylings/classMerge";
import { NavLink } from "react-router";

const colCountClass = [
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
  "grid-cols-6",
  "grid-cols-7",
  "grid-cols-8",
  "grid-cols-9",
  "grid-cols-10",
];

const Padding = ({ grow = false }) => (
  <div
    className={
      "w-4 border-b-2 border-b-black dark:border-b-white" +
      (grow ? " grow" : "")
    }
  ></div>
);

export default function TabLinks({
  className,
  bgColor = "bg-primary/20 dark:bg-primary hover:bg-primary/40 dark:hover:bg-primary/80",
  links = [],
}) {
  return (
    <div className={classMerge(className, "flex flex-row")}>
      <Padding />
      <div className="flex flex-row items-end">
        {links.map(({ href, name }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              "grow border-black dark:border-white first:border-l-2 border-t-2 justify-center flex flex-row px-4 font-medium group-first:border-l-2 " +
              (isActive
                ? " border-b-0 pb-3 pt-3 border-l-2 border-r-2"
                : " py-2 border-b-2 border-r-2 [&:has(+*.pt-3)]:border-r-0 " +
                  bgColor)
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
      <Padding grow />
    </div>
  );
  // return (
  //   <div className={classMerge(className, "flex flex-row")}>
  //     <div className="w-4 border-b-2 border-b-black dark:border-b-white"></div>
  //     <div className={"grid items-end auto-cols-auto"}>
  //       {links.map(({ href, name }) => (
  //         <NavLink
  //           key={href}
  //           to={href}
  //           className={({ isActive }) =>
  //             "grow border-black dark:border-white first:border-l-2 border-t-2 justify-center flex flex-row px-4 font-medium group-first:border-l-2 w-36" +
  //             (isActive
  //               ? " border-b-0 pb-3 pt-3 border-l-2 border-r-2"
  //               : " bg-primary/20 dark:bg-primary py-2 border-b-2 border-r-2 [&:has(+*.pt-3)]:border-r-0")
  //           }
  //         >
  //           {name}
  //         </NavLink>
  //       ))}
  //     </div>
  //     <div className="grow border-b-2 border-b-black dark:border-b-white"></div>
  //   </div>
  // );
}
