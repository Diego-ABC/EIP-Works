export default function DashboardHeader({ children, className }) {
  return (
    <h1
      className={"text-3xl font-semibold" + (className ? " " + className : "")}
    >
      {children}
    </h1>
  );
}
