import React from "react";
import { sidebarActions } from "../actions/sidebar.action";
import { useAppSelector } from "../Store/store";
import DropDown from "./DropDown";

interface Props {}

const Header: React.FC<Props> = () => {
  const sidebarOpenStatus = useAppSelector(
    (state) => state.sidebar.isSidebarOpen
  );
  return (
    <div className="z-30 w-full bg-header h-header">
      <div className="flex justify-between h-full px-4">
        <div className="flex my-auto">
          <svg
            onClick={() => {
              sidebarActions.sidebar(!sidebarOpenStatus);
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
            className="rounded-full cursor-pointer text-hamburger hover:bg-gray-200"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <h2 className="ml-3 font-bold tracking-wider sm-md:hidden text-15 text-hamburger">
            Sales
          </h2>
          <h2 className="hidden ml-6 tracking-wider sm-md:block text-14 text-hamburger">
            {window.location.href !== "/profile" ? (
              <div>
                Dashboard <span className="font-bold"> / Sales</span>
              </div>
            ) : (
              <span className="font-bold">Account Settings</span>
            )}
          </h2>
        </div>

        <div className="hidden my-auto md-lg:block">
          <DropDown
            initialButtonValue={0}
            itemsToBeShown={[{ name: "Settings" }, { name: "Share" }]}
          />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
