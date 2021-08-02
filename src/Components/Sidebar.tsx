import React from "react";
import SideBarElement from "./SideBarElement/SideBarElement";
import {
  BiVideoRecording,
  GrGroup,
  GiExplosiveMeeting,
  FaChild,
  BiLogOut,
} from "react-icons/all";
import { logout } from "../APIs/Auth/auth";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../Store/store";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const history = useHistory();
  const isSideBarOpen = useAppSelector((state) => state.isSidebarOpen);

  return (
    <nav
      className={`fixed hidden transition-transform duration-500 ease-in-out min-h-full px-4 text-white transform md-lg:block ${
        isSideBarOpen ? "" : "-translate-x-full"
      }`}
    >
      <div>
        <SideBarElement
          onClick={() => history.push("/dashboard")}
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
          onClick={() => history.push("/batch/1/recording/15")}
          title="Recordings"
        >
          <BiVideoRecording className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
        <SideBarElement onClick={() => history.push("/groups")} title="Groups">
          <GrGroup className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
        <SideBarElement
          onClick={() => history.push("/groups/button")}
          title="Groups Button"
        >
          <GrGroup className="w-5 h-5 text-sidebar-elements " />
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
