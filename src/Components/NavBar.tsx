import React from "react";
import { avatarImage } from "../Constants/constants";
import { authSelector } from "../selectors/auth.selectors";
import { useAppSelector } from "../Store/store";
import Avatar from "./Avatar/Avatar";
import Search from "./Search/Search";
import logo from "../Images/logo.png";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const role = useAppSelector(authSelector)?.roles[0]?.name;
  const authDetails = useAppSelector(authSelector);
  // const fullName = authDetails?.first_name + " " + authDetails?.last_name;
  const username = authDetails?.username;

  return (
    <div className="bg-navBar h-navbar">
      <div className="flex justify-between w-full h-full">
        <ul className="pl-3 my-auto flex">
          <li className="flex">
            <img src={logo} alt="Logo" className="w-9 h-9" />
            <h1 className="hidden my-auto ml-3 text-2xl font-semibold tracking-wider uppercase md:block text-navBar-light">
              trainica
            </h1>
          </li>
        </ul>
        <ul className="flex-1 my-auto">
          <li className="mx-auto mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-auto md:hidden text-navBar-light"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <div className="flex">
              <Search className="hidden flex-1 ml-12 md:block" />
              <div className="hidden md:block flex-1 uppercase text-center text-2xl my-auto tracking-widest font-extrabold text-white">
                {role === "ROLE_TRAINER" ? "trainer" : "trainee"}
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex my-auto justify-evenly w-28 md:w-64">
          <li className="relative my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-navBar-light"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="absolute rounded-full right-online-right -top-1 h-online-status w-online-status bg-online-status"></span>
          </li>
          <li className="my-auto flex justify-between">
            <div className="focus:outline-none">
              <Avatar
                size="small"
                className="h-10 w-10"
                src={avatarImage}
                circular={false}
              />
            </div>
            <div className="hidden ml-3 md:block capitalize font-semibold text-center my-auto text-white">
              {username || "Shivam"}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBar.defaultProps = {};

export default React.memo(NavBar);
