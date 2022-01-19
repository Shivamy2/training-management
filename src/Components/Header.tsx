import React from "react";
import { uiSidebarAction } from "../actions/ui.actions";
import { uiSidebarStatusSelector } from "../selectors/ui.selectors";
import { store, useAppSelector } from "../Store/store";
import DropDown from "./DropDown";

interface Props {}

const Header: React.FC<Props> = () => {
  const sidebarStatus = useAppSelector(uiSidebarStatusSelector);
  return (
    <div className="z-30 w-full bg-header h-header">
      <div className="flex justify-between h-full px-4">
        <div className="flex my-auto">
          <svg
            onClick={() => {
              store.dispatch(uiSidebarAction(!sidebarStatus));
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rounded-full hidden md-lg:block cursor-pointer text-hamburger hover:bg-gray-200"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <h2 className="hidden ml-6 tracking-wider md-lg:block text-14 text-hamburger">
            <div className="font-bold">Dashboard</div>
          </h2>
        </div>
        {/* <h2 className="m-auto tracking-wider md-lg:hidden text-14 text-hamburger">
          <div className="font-bold md:text-lg">Dashboard</div>
        </h2> */}
        <div className="my-auto md-lg:block mx-auto md-lg:mx-0">
          <DropDown
            initialButtonValue={0}
            itemsToBeShown={[
              { name: "Edit Profile", path: "/profile" },
              {
                name: "Dashboard",
                path: "/dashboard",
                isHiddenOnDesktop: true,
              },
              {
                name: "Assignment",
                path: "/assignment/upload",
                isHiddenOnDesktop: true,
              },
              {
                name: "Add Trainees",
                path: "/add-trainees",
                isHiddenOnDesktop: true,
              },
              {
                name: "Enrolled",
                path: "/your-trainees",
                isHiddenOnDesktop: true,
              },
              { name: "Settings" },
              { name: "Sign Out", path: "/login" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
