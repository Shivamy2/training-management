import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GroupData from "./GroupData";
import GroupDataButton from "./GroupDataButton";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import Sidebar from "../../Components/Sidebar";
import { loginToken } from "../../Constants/constants";
import DashboardPage from "./Dashboard.page";
import MovieGroupPage from "./MovieGroup.page";
import MovieGroupButtonPage from "./MovieGroupButton.page";
import RecordingPage from "./Recording.page";
import { User } from "../../Models/User";

interface Props {
  data?: User;
}

const MainDisplay: React.FC<Props> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return loginToken ? (
    <div>
      <div className="sticky top-0 z-20">
        <NavBar imgUrl={data?.profile_pic_url} />
        <Header
          onHamburgerClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      <div className="flex">
        <Sidebar open={isMenuOpen} />
        <div className={"flex flex-1 minimum__height "}>
          <Switch>
            <Route path="/dashboard">
              <DashboardPage data={data} />
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
