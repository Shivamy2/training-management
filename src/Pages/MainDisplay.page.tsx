import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";

interface Props {}

const MainDisplay: React.FC<Props> = () => {
  return (
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
  );
};

MainDisplay.defaultProps = {};

export default React.memo(MainDisplay);
