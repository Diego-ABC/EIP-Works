import { Navigate, Outlet, useNavigation } from "react-router";
import { useUser } from "../../features/auth/providers/UserProvider";
import NavPane from "./NavPane";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef } from "react";

export default function DashboardLayout() {
  const { isLoggedIn, checkedAuthState } = useUser();

  const navigation = useNavigation();
  const ref = useRef();

  useEffect(() => {
    if (navigation.state === "loading" || navigation.state === "submitting") {
      ref.current?.continuousStart();
    } else {
      ref.current?.complete();
    }
  }, [navigation.state]);

  if (!checkedAuthState) return null;
  if (!isLoggedIn) return <Navigate to="/signin" />;

  return (
    <div className="h-dvh w-dvw bg-base-200 flex flex-row">
      <LoadingBar
        ref={ref}
        height={5}
        className="bg-primary"
        containerClassName="fixed top-0 left-0 w-full z-50 "
        color="--color-primary"
        style={{ backgroundColor: "" }}
        shadow={false}
      />
      <NavPane />
      <div className="grow basis-0 shrink-0 h-full overflow-auto">
        <div className="p-5 min-w-full min-h-full w-fit">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
