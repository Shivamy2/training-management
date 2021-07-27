import React, { useEffect, useState, Suspense } from "react";
import { ImSpinner9 } from "react-icons/im";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { me } from "./APIs/Auth/auth";
import { loginToken, LS_LOGIN_TOKEN } from "./Constants/constants";
import { User } from "./Models/User";
import AuthLazy from "./Pages/Auth/Auth.lazy";
import MainDisplayLazy from "./Pages/MainContent/MainDisplay.lazy";

interface Props {}

const App: React.FC<Props> = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!loginToken) return;

    me().then((response) => setUser(response));
  }, []);

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen">
          <ImSpinner9 className="w-12 h-full m-auto animate-spin" />
        </div>
      }
    >
      <div className="bg-body">
        <Router>
          <Switch>
            <Route exact path="/">
              {localStorage.getItem(LS_LOGIN_TOKEN) ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path={["/login", "/signup"]}>
              <AuthLazy onLogin={setUser} />
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
              ]}
            >
              <MainDisplayLazy data={user} />
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
