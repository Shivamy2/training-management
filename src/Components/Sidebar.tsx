import React, { useCallback } from "react";
import SideBarElement from "./SideBarElement/SideBarElement";
import {
  BiLogOut,
  BiUser,
  MdAssignmentInd,
  AiTwotoneEdit,
} from "react-icons/all";
import { logout } from "../APIs/Auth/auth";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../Store/store";
import { uiSidebarStatusSelector } from "../selectors/ui.selectors";
import { authSelector } from "../selectors/auth.selectors";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const history = useHistory();
  const isSideBarOpen = useAppSelector(uiSidebarStatusSelector);
  const role = useAppSelector(authSelector)?.roles[0]?.name;

  return (
    <div
      className={`fixed hidden transition-transform duration-500 ease-in-out min-h-full px-4 text-white transform md-lg:block ${
        isSideBarOpen ? "" : "-translate-x-full"
      }`}
    >
      <div>
        <SideBarElement
          onClick={useCallback(() => {
            history.push("/dashboard");
          }, [])} // eslint-disable-line
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
        {/* <SideBarElement
          onClick={useCallback(() => {
            store.dispatch(
              uiSidebarSelectedItemAction("/batch/1/recording/12", "recordings")
            );
            history.push("/batch/1/recording/12");
          }, [])} // eslint-disable-line
          title="Recordings"
        >
          <BiVideoRecording className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement> */}
        {/* <SideBarElement
          onClick={useCallback(() => {
            history.push("/groups");
          }, [])} // eslint-disable-line
          title="Groups"
        >
          <GrGroup className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement> */}
        {role === "ROLE_TRAINER" && (
          <SideBarElement
            onClick={() => history.push("/add-trainees")} // eslint-disable-line
            title="Add Trainees"
          >
            <BiUser className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>
        )}
        {role === "ROLE_TRAINER" && (
          <SideBarElement
            onClick={() => history.push("/assignment/upload")} // eslint-disable-line
            title="Assignment"
          >
            <MdAssignmentInd className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>
        )}

        {role === "ROLE_TRAINEE" && (
          <SideBarElement
            onClick={() => history.push("/assignment/submit")} // eslint-disable-line
            title="Assignment"
          >
            <MdAssignmentInd className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>
        )}
        <SideBarElement
          onClick={() => history.push("/profile")} // eslint-disable-line
          title="Edit Profile"
        >
          <AiTwotoneEdit className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
        {/* <SideBarElement
          title="Meetings"
          onClick={() => history.push("/batch/1/recording/12")}
        >
          <GiExplosiveMeeting className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
        <SideBarElement
          title="Student Report"
          onClick={() => history.push("/student/report")}
        >
          <FaChild className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement> */}

        <SideBarElement
          onClick={() => {
            if (window.confirm("Are you sure? You will be logout")) {
              logout();
            }
          }}
          title="Logout"
        >
          <BiLogOut className="w-5 h-5 text-sidebar-elements " />
        </SideBarElement>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  open: true,
};

export default React.memo(Sidebar);
