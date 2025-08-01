import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<>main dashboard</>}></Route>
      <Route path="/signin" element={<>sign in page</>} />
    </Route>
  )
);

export default router;
