import React, { useEffect, Suspense, lazy } from "react";
import { ImSpinner9 } from "react-icons/im";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { checkDetails, meFetchUserAction } from "./actions/auth.actions";
import { loginToken } from "./Constants/constants";
import EditProfile from "./Pages/MainContent/Profile/EditProfile";
import { authSelector } from "./selectors/auth.selectors";
import {
  detailResponseReceived,
  detailsStatus,
} from "./selectors/ui.selectors";
import { store, useAppSelector } from "./Store/store";

const AuthLazy = lazy(() => import("./Pages/Auth/Auth.page"));
const MainDisplayLazy = lazy(
  () => import("./Pages/MainContent/MainDisplay.page")
);

interface Props {}

const App: React.FC<Props> = () => {
  const authUser = useAppSelector(authSelector);
  const checkDetailsStatus = useAppSelector(detailsStatus);
  const isDetailResponseReceive = useAppSelector(detailResponseReceived);
  useEffect(() => {
    console.log("checking details");
    if (!loginToken) return;
    // me().then((userResponse) => {
    //   console.log(userResponse);
    //   authActions.fetch(userResponse);
    // });
    if (checkDetailsStatus) {
      store.dispatch(meFetchUserAction());
    } else {
      store.dispatch(checkDetails());
    }
  }, [checkDetailsStatus, loginToken]); // eslint-disable-line

  // if (!isDetailResponseReceive) {
  //   return (
  //     <div className="w-screen h-screen">
  //       <ImSpinner9 className="w-full h-12 m-auto animate-spin" />
  //     </div>
  //   );
  // }

  if (loginToken && !authUser && checkDetailsStatus) {
    return (
      <div className="w-screen h-screen">
        <ImSpinner9 className="w-full h-12 m-auto animate-spin" />
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen">
          <ImSpinner9 className="w-full h-12 m-auto animate-spin" />
        </div>
      }
    >
      <div className="bg-body">
        <Router>
          <Switch>
            <Route exact path="/">
              checkDetailsStatus
              {authUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/register" />
              )}
            </Route>
            <Route exact path={["/login", "/signup"]}>
              <AuthLazy />
            </Route>
            <Route exact path="/register">
              {authUser ? (
                <Redirect to="/dashboard" />
              ) : isDetailResponseReceive ? (
                <EditProfile />
              ) : !loginToken ? (
                <Redirect to="/login" />
              ) : (
                <div className="w-screen h-screen">
                  <ImSpinner9 className="w-full h-12 m-auto animate-spin" />
                </div>
              )}
            </Route>

            <Route
              exact
              path={[
                "/dashboard",
                "/batch/:batchNumber/recording/:recordingNumber",
                "/movie-group",
                "/movie-group-button",
                "/groups",
                "/groups/button",
                "/profile",
                "/groups/:searchedQuery/:selectedGroupId",
                "/users",
                "/users/:selectedUserId",
              ]}
            >
              {authUser ? (
                <MainDisplayLazy />
              ) : !checkDetailsStatus ? (
                <Redirect to="/register" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/">Page Not Found 404 Error</Route>
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
};

App.defaultProps = {};

export default React.memo(App);
