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
import StaffList from "./features/staff/pages/StaffList";
import NewStaff from "./features/staff/pages/NewStaff";
import addStaffAction from "./features/staff/loadersAndActions/addStaffAction";
import StaffDetail from "./features/staff/pages/StaffDetail";
import staffMemberLoader from "./features/staff/loadersAndActions/staffMemberLoader";
import inviteCodeLoader from "./features/auth/loadersAndActions/inviteCodeLoader";
import InviteAccept from "./features/auth/pages/InviteAccept";
import BadInviteCode from "./features/auth/pages/BadInviteCode";
import inviteSetPasswordAction from "./features/auth/loadersAndActions/inviteSetPasswordAction";
import CasesList from "./features/cases/pages/CasesList";
import defaultPageLoader from "./layout/DashboardLayout/defaultPageLoader";
import NewCase from "./features/cases/pages/NewCase";
import newCaseAction from "./features/cases/loadersAndActions/newCaseAction";
import casesListLoader from "./features/cases/loadersAndActions/casesListLoader";
import CaseDetails from "./features/cases/pages/CaseDetails";
import caseDetailsLoader from "./features/cases/loadersAndActions/caseDetailsLoader";

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
        <Route index loader={defaultPageLoader} />
        <Route path="cases">
          <Route index element={<CasesList />} loader={casesListLoader} />
          <Route path="new" element={<NewCase />} action={newCaseAction} />
          <Route
            path=":caseId"
            element={<CaseDetails />}
            loader={caseDetailsLoader}
          />
        </Route>
        <Route path="staff">
          <Route index element={<StaffList />} />
          <Route path="new" element={<NewStaff />} action={addStaffAction} />
          <Route
            path=":staffId"
            element={<StaffDetail />}
            loader={staffMemberLoader}
          />
        </Route>
        <Route path="*" element={<>Sorry this page doesn't exist yet</>} />
      </Route>
      <Route
        path="signin"
        element={<SignIn />}
        loader={signOutLoader}
        action={signInAction}
      />
      <Route
        path="invite/staff/:inviteCode"
        loader={inviteCodeLoader}
        action={inviteSetPasswordAction}
        element={<InviteAccept />}
      />
      <Route path="badinvite" element={<BadInviteCode />} />
    </Route>
  )
);

export default router;
