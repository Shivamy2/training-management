import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AuthPages from "./Pages/Auth.page";
import LandingPage from "./Pages/Landing.page";
import MainDisplayPage from "./Pages/MainDisplay.page";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="bg-body">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path={["/login", "/signup"]}>
            <AuthPages />
          </Route>
          <Route
            exact
            path={[
              "/dashboard",
              "/batch/:batchNumber/recording/:recordingNumber",
              "/movie-group",
              "/movie-group-button",
            ]}
          >
            <MainDisplayPage />
          </Route>
          <Route path="/">Page Not Found 404 Error</Route>
        </Switch>
      </Router>
    </div>
  );
};

App.defaultProps = {};

export default React.memo(App);
