import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import GroupData from "./GroupData";
import GroupDataButton from "./GroupDataButton";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import Sidebar from "../../Components/Sidebar";
import DashboardPage from "./Dashboard.page";
import MovieGroupPage from "./MovieGroup.page";
import MovieGroupButtonPage from "./MovieGroupButton.page";
import RecordingPage from "./Recording.page";
import EditProfile from "./Profile/EditProfile";

interface Props {}

const MainDisplay: React.FC<Props> = () => {
  return (
    <div>
      <div className="sticky top-0 z-20">
        <NavBar />
        <Header />
      </div>
      <div className="flex">
        <div className={" md-lg:w-228 border-r border-gray-300 "}>
          <Sidebar />
        </div>
        <div className={"flex flex-1 minimum__height"}>
          <Switch>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route path="/movie-group">
              <MovieGroupPage />
            </Route>
            <Route path="/movie-group-button">
              <MovieGroupButtonPage />
            </Route>
            <Route exact path="/groups">
              <GroupData />
            </Route>
            <Route exact path="/groups/button">
              <GroupDataButton />
            </Route>
            <Route exact path="/profile">
              <EditProfile />
            </Route>
            <Route path="/batch/:batchNumber/recording/:recordingNumber">
              <RecordingPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

MainDisplay.defaultProps = {};

export default React.memo(MainDisplay);
