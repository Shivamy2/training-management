import React, { useEffect, Suspense, lazy } from "react";
import { ImSpinner9 } from "react-icons/im";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { authActions } from "./actions/action.constants";
import { me } from "./APIs/Auth/auth";
import { loginToken } from "./Constants/constants";
import { authSelector } from "./selectors/auth.selectors";
import { useAppSelector } from "./Store/store";

const AuthLazy = lazy(() => import("./Pages/Auth/Auth.page"));
const MainDisplayLazy = lazy(
  () => import("./Pages/MainContent/MainDisplay.page")
);

interface Props {}

const App: React.FC<Props> = () => {
  const authUser = useAppSelector(authSelector);
  useEffect(() => {
    if (!loginToken) return;

    me().then((userResponse) => {
      console.log(userResponse);
      authActions.fetch(userResponse);
    });
  }, []); // eslint-disable-line

  if (!authUser && loginToken) {
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
              {authUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path={["/login", "/signup"]}>
              <AuthLazy />
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
              ]}
            >
              {authUser ? <MainDisplayLazy /> : <Redirect to="/login" />}
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
