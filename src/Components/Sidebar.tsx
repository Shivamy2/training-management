import React from "react";
import SideBarElement from "./SideBarElement/SideBarElement";
import {
  BiVideoRecording,
  GrGroup,
  GiExplosiveMeeting,
  FaChild,
  BiLogOut,
} from "react-icons/all";
import { LS_LOGIN_TOKEN } from "../Constants/constants";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="fixed hidden pl-4 pr-4 text-white transition duration-500 ease-in-out border-r border-gray-300 w-228 md-lg:block sidebar">
      <SideBarElement
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
      <SideBarElement title="Recordings">
        <BiVideoRecording className="w-5 h-5 text-sidebar-elements " />
      </SideBarElement>
      <SideBarElement title="Groups">
        <GrGroup className="w-5 h-5 text-sidebar-elements " />
      </SideBarElement>
      <SideBarElement title="Meetings">
        <GiExplosiveMeeting className="w-5 h-5 text-sidebar-elements " />
      </SideBarElement>
      <SideBarElement title="Student Report">
        <FaChild className="w-5 h-5 text-sidebar-elements " />
      </SideBarElement>

      <SideBarElement
        onClick={() => {
          localStorage.removeItem(LS_LOGIN_TOKEN);
          window.location.href = "/login";
        }}
        title="Logout"
      >
        <BiLogOut className="w-5 h-5 text-sidebar-elements " />
      </SideBarElement>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);
