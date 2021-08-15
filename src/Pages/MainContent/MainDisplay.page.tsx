import React from "react";
import { Route, Switch } from "react-router-dom";
import GroupData from "./GroupData";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import Sidebar from "../../Components/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";
import EditProfile from "./Profile/EditProfile";
import { useAppSelector } from "../../Store/store";
import GroupDetailsPage from "./GroupDetails.page";
import { UsersPage } from "./Users.page";
import UserDetailPage from "./UserDetail.page";
// import { groupSelectedSelector } from "../../selectors/groups.selectors";

interface Props {}

const MainDisplay: React.FC<Props> = () => {
  const isSideBarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);
  // const selectedGroupId = useAppSelector(groupSelectedSelector);
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
        <div className={"flex flex-1 minimum__height"}>
          <Switch>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route exact path="/groups">
              <GroupData />
            </Route>
            <Route exact path="/groups/:searchedQuery/:selectedGroupId">
              <GroupDetailsPage />
            </Route>
            <Route exact path="/profile">
              <EditProfile />
            </Route>

            <Route exact path="/users">
              <UsersPage />
            </Route>

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
