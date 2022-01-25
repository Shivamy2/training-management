import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import Sidebar from "../../Components/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";
import EditProfile from "./Profile/EditProfile";
import { useAppSelector } from "../../Store/store";
import GroupDetailsPage from "./Groups/GroupDetails.page";
import UserDetailPage from "./Users/UserDetail.page";
import { uiSidebarStatusSelector } from "../../selectors/ui.selectors";
import AddTraineesPage from "./AddTrainees/AddTrainees.page";
import YourTraineesComponent from "../../Components/Trainee/YourTrainees.component";
import { authSelector } from "../../selectors/auth.selectors";
import AssignmentUpload from "../Assignment/Assignment";
import AssignmentSubmit from "../Assignment/AssignmentSubmit";
import AssignmentSubmitted from "../Assignment/AssignmentSubmitted";

interface Props {}

const MainDisplay: React.FC<Props> = () => {
  const role = useAppSelector(authSelector)?.roles[0].name;
  const isSideBarOpen = useAppSelector(uiSidebarStatusSelector);
  return (
    <div>
      <div className="sticky top-0 z-20">
        <NavBar />
        <Header />
      </div>
      <div className="flex">
        <div
          className={` border-r border-gray-300 transition-width duration-500 ${
            isSideBarOpen ? "md-lg:w-228" : "w-0"
          }`}
        >
          <Sidebar />
        </div>
        <div className={"flex flex-1 minimum__height justify-center"}>
          <Switch>
            <Route exact path="/dashboard">
              {role === "ROLE_TRAINER" ? (
                <DashboardPage />
              ) : (
                <Redirect to={"/assignment/submit"} />
              )}
            </Route>
            <Route exact path="/add-trainees">
              {role === "ROLE_TRAINER" ? (
                <AddTraineesPage />
              ) : (
                <Redirect to={"/dashboard"} />
              )}
            </Route>
            {/* <Route exact path="/groups">
              <GroupData />
            </Route> */}
            <Route exact path="/groups/:searchedQuery/:selectedGroupId">
              <GroupDetailsPage />
            </Route>
            <Route exact path="/profile">
              <EditProfile />
            </Route>
            <Route exact path="/assignment/upload">
              {role === "ROLE_TRAINER" ? (
                <AssignmentUpload />
              ) : (
                <Redirect to={"/assignment/submit"} />
              )}
            </Route>

            <Route exact path="/assignment/submit">
              {role === "ROLE_TRAINEE" ? (
                <AssignmentSubmit />
              ) : (
                <Redirect to={"/assignment/upload"} />
              )}
            </Route>

            <Route exact path="/assignment/submitted/all">
              {role === "ROLE_TRAINEE" ? (
                <AssignmentSubmitted />
              ) : (
                <Redirect to={"/assignment/upload"} />
              )}
            </Route>

            <Route exact path="/your-trainees">
              {role === "ROLE_TRAINER" ? (
                <YourTraineesComponent />
              ) : (
                <Redirect to={"/dashboard"} />
              )}
            </Route>

            {/* <Route exact path="/users">
              <UsersPage />
            </Route> */}

            <Route exact path="/users/:selectedUserId">
              <UserDetailPage />
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
