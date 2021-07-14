import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./Login.page";
import SignUpPage from "./SignUp.page";
import AuthHero from "../Components/AuthHero";

interface Props {}

const AuthPages: React.FC<Props> = () => {
  return (
    <div className="flex h-screen">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
      <AuthHero />
    </div>
  );
};

AuthPages.defaultProps = {};

export default React.memo(AuthPages);
