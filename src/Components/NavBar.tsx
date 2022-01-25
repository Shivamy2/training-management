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
  const firstName = useAppSelector(authSelector)?.first_name;

  return (
    <div className="bg-navBar h-navbar">
      <div className="flex justify-between w-full h-full">
        <ul className="pl-3 my-auto flex">
          <li className="flex">
            <img src={logo} alt="Logo" className="w-9 h-9" />
            {/* <svg
              className="w-9 h-9"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 672 723"
            >
              <g>
                <g>
                  <path
                    fill="#eaf1ff"
                    d="M213.9,584.4c-47.4-25.5-84.7-60.8-111.8-106.1C75,433.1,61.4,382,61.4,324.9c0-57,13.6-108.1,40.7-153.3
			S166.5,91,213.9,65.5s100.7-38.2,159.9-38.2c49.9,0,95,8.8,135.3,26.3s74.1,42.8,101.5,75.7l-85.5,78.9
			c-38.9-44.9-87.2-67.4-144.7-67.4c-35.6,0-67.4,7.8-95.4,23.4s-49.7,37.4-65.4,65.4c-15.6,28-23.4,59.8-23.4,95.4
			s7.8,67.4,23.4,95.4s37.4,49.7,65.4,65.4c28,15.6,59.7,23.4,95.4,23.4c57.6,0,105.8-22.7,144.7-68.2l85.5,78.9
			c-27.4,33.4-61.4,58.9-102,76.5c-40.6,17.5-85.8,26.3-135.7,26.3C314.3,622.7,261.3,809.9,213.9,584.4z"
                  />
                </g>
                <circle fill="#FFBB44" cx="375.4" cy="322.9" r="100" />
              </g>
            </svg> */}
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
            <div className="hidden ml-3 md:block uppercase font-semibold text-center my-auto text-white">
              {firstName || "Shivam"}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBar.defaultProps = {};

export default React.memo(NavBar);
