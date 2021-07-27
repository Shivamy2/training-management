import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../Auth/Login.page";
import SignUpPage from "./SignUp.page";
import AuthHero from "../../Components/AuthHero";
import { User } from "../../Models/User";

interface Props {
  onLogin?: (data: User) => void;
}

const AuthPages: React.FC<Props> = ({ onLogin }) => {
  return (
    <div className="flex h-screen">
      <Switch>
        <Route path="/login">
          <LoginPage onLogin={onLogin} />
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
