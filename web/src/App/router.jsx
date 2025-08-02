import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import SignIn from "./features/auth/pages/SignIn";
import signOutLoader from "./features/auth/services/signOutLoader";
import signInAction from "./features/auth/services/signInAction";
import UserProvider from "./features/auth/providers/UserProvider";
import DashboardLayout from "./layout/DashboardLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <UserProvider>
            <DashboardLayout />
          </UserProvider>
        }
      >
        <Route path="*" element={<>Sorry this page doesn't exist yet</>} />
      </Route>
      <Route
        path="/signin"
        element={<SignIn />}
        loader={signOutLoader}
        action={signInAction}
      />
    </Route>
  )
);

export default router;
