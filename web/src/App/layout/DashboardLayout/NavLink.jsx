import { NavLink as NLink } from "react-router";

const navLinkClass =
  (className) =>
  ({ isActive }) =>
    [
      className,
      "btn text-xl justify-start px-3 btn-neutral dark:btn-primary",
      isActive ? "" : "btn-soft",
    ].join(" ");

export default function NavLink({
  className = "",
  linkData: { href, name, Icon = null } = {},
}) {
  return (
    <NLink to={href} className={navLinkClass(className)}>
      <Icon className="size-8" />
      {name}
    </NLink>
  );
}
