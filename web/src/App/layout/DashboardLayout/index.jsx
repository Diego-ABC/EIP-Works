import { Navigate, Outlet } from "react-router";
import { useUser } from "../../features/auth/providers/UserProvider";
import NavPane from "./NavPane";

export default function DashboardLayout() {
  const { isLoggedIn, checkedAuthState } = useUser();
  if (!checkedAuthState) return null;
  if (!isLoggedIn) return <Navigate to="/signin" />;

  return (
    <div className="h-dvh w-dvw bg-base-200 flex flex-row">
      <NavPane />
      <Outlet />
    </div>
  );
}
