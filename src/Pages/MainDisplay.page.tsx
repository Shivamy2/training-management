import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GroupData from "../Components/GroupData/GroupData";
import GroupDataButton from "../Components/GroupData/GroupDataButton";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Sidebar from "../Components/Sidebar";
import { loginToken } from "../Constants/constants";
import DashboardPage from "./Dashboard.page";
import MovieGroupPage from "./MovieGroup.page";
import MovieGroupButtonPage from "./MovieGroupButton.page";
import RecordingPage from "./Recording.page";

interface Props {}

const MainDisplay: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return loginToken ? (
    <div>
      <div className="sticky top-0 z-20">
        <NavBar />
        <Header
          onHamburgerClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      <div className="flex">
        <Sidebar open={isMenuOpen} />
        <div className="w-screen minimum__height">
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
            <Route path="/batch/:batchNumber/recording/:recordingNumber">
              <RecordingPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

MainDisplay.defaultProps = {};

export default React.memo(MainDisplay);
