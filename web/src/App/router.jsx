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
import caseDetailsLoader from "./features/cases/loadersAndActions/caseDetailsLoader";
import CaseOverview from "./features/cases/pages/CaseOverview";
import caseOverviewRedirectLoader from "./features/cases/loadersAndActions/caseOverviewRedirectLoader";
import CaseProfile from "./features/cases/pages/CaseProfile";
import CaseAuthorizations from "./features/cases/pages/CaseAuthorizations";
import caseAuthorizationsLoader from "./features/cases/loadersAndActions/caseAuthorizationsLoader";
import NewAuth from "./features/cases/pages/NewAuth";
import newAuthAction from "./features/cases/loadersAndActions/newAuthActions";
import AuthDetailsPage from "./features/cases/pages/AuthDetailsPage";
import authDetailsLoader from "./features/cases/loadersAndActions/authDetailsLoader";
import CaseDocuments from "./features/cases/subfeatures/caseDocuments/pages/CaseDocuments";
import NewCaseDocument from "./features/cases/pages/NewCaseDocument";
import newDocAction from "./features/cases/loadersAndActions/newDocAction";
import caseDocsLoader from "./features/cases/loadersAndActions/caseDocsLoader";
import CaseNotes from "./features/cases/subfeatures/caseNotes/pages/CaseNotes";
import newNoteAction from "./features/cases/subfeatures/caseNotes/loadersAndActions/newNoteAction";
import caseNotesLoader from "./features/cases/subfeatures/caseNotes/loadersAndActions/caseNotesLoader";
import saveCaseEditAction from "./features/cases/subfeatures/caseProfile/loadersAndActions/saveCaseEditAction";
import NotionFeatureForm from "./features/feedback/pages/NotionFeatureForm";
import FeedbackMainPage from "./features/feedback/pages/FeedbackMainPage";
import BugReportForm from "./features/feedback/pages/BugReportForm";
import ProviderList from "./features/providers/pages/ProviderList";

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
            element={<CaseOverview />}
            loader={caseDetailsLoader}
          >
            <Route index loader={caseOverviewRedirectLoader} />
            <Route
              path="profile"
              element={<CaseProfile />}
              action={saveCaseEditAction}
            />
            <Route path="authorizations">
              <Route
                index
                element={<CaseAuthorizations />}
                loader={caseAuthorizationsLoader}
              />
              <Route path="new" element={<NewAuth />} action={newAuthAction} />
              <Route
                path=":authId"
                element={<AuthDetailsPage />}
                loader={authDetailsLoader}
              />
            </Route>
            {/* TODO: have /documents/new as an outlet through a modal under /documents*/}
            <Route path="documents">
              <Route
                index
                element={<CaseDocuments />}
                loader={caseDocsLoader}
              />
              <Route
                path="new"
                element={<NewCaseDocument />}
                action={newDocAction}
              />
            </Route>
            <Route
              path="notes"
              element={<CaseNotes />}
              action={newNoteAction}
              loader={caseNotesLoader}
            />
            <Route path="*" element={<>page not implemented</>} />
          </Route>
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
        <Route path="providers">
          <Route index element={<ProviderList />} />
        </Route>
        <Route path="feedback">
          <Route index element={<FeedbackMainPage />} />
          <Route path="bug-report" element={<BugReportForm />} />
          <Route path="feature-request" element={<NotionFeatureForm />} />
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
        errorElement={<>error</>}
      />
      <Route path="badinvite" element={<BadInviteCode />} />
    </Route>
  )
);

export default router;
