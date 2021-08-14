import React, { useCallback } from "react";
import SideBarElement from "./SideBarElement/SideBarElement";
import {
  BiVideoRecording,
  GrGroup,
  GiExplosiveMeeting,
  FaChild,
  BiLogOut,
  BiUser,
} from "react-icons/all";
import { logout } from "../APIs/Auth/auth";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../Store/store";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const history = useHistory();
  const isSideBarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <nav
      className={`fixed hidden transition-transform duration-500 ease-in-out min-h-full px-4 text-white transform md-lg:block ${
        isSideBarOpen ? "" : "-translate-x-full"
      }`}
    >
      <div>
        <SideBarElement
          onClick={useCallback(() => history.push("/dashboard"), [])} // eslint-disable-line
          containsDirection={true}
          title="Dashboard"
          theme="fill"
          className="mt-5 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="rgb(224, 230, 237)"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" text-sidebar-elements"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </SideBarElement>
        <SideBarElement
          onClick={useCallback(() => history.push("/batch/1/recording/15"), [])} // eslint-disable-line
          title="Recordings"
        >
          <BiVideoRecording className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
        <SideBarElement
          onClick={useCallback(() => history.push("/groups"), [])} // eslint-disable-line
          title="Groups"
        >
          <GrGroup className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
        <SideBarElement
          onClick={useCallback(() => history.push("/users"), [])} // eslint-disable-line
          title="Users"
        >
          <BiUser className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>

        <SideBarElement
          title="Meetings"
          onClick={() => history.push("/meetings")}
        >
          <GiExplosiveMeeting className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
        <SideBarElement
          title="Student Report"
          onClick={() => history.push("/report")}
        >
          <FaChild className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>

        <SideBarElement
          onClick={() => {
            logout();
          }}
          title="Logout"
        >
          <BiLogOut className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
      </div>
    </nav>
  );
};

Sidebar.defaultProps = {
  open: true,
};

export default React.memo(Sidebar);
