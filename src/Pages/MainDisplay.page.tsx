import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Sidebar from "../Components/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";

interface Props {}

const MainDisplay: React.FC<Props> = () => {
  return (
    <div>
      <div className="sticky top-0">
        <NavBar />
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/batch/:batchNumber/recording/:recordingNumber">
            <RecordingPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

MainDisplay.defaultProps = {};

export default React.memo(MainDisplay);
