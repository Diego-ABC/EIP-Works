import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import SignIn from "./features/auth/pages/SignIn";
import signOutLoader from "./features/auth/services/signOutLoader";
import signInAction from "./features/auth/services/signInAction";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<>main dashboard</>}></Route>
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
