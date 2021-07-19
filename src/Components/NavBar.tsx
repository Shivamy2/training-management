import React from "react";
import CanadaFlag from "../Images/canada.png";
import DisplayPicture from "../Images/displayImage.jpeg";

interface Props {}

const NavBar: React.FC<Props> = () => {
  return (
    <div className="sticky top-0 bg-navBar h-navbar">
      <div className="flex justify-between w-full h-full">
        <ul className="pl-3 my-auto">
          <li className="flex">
            <svg
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
            </svg>
            <h1 className="hidden my-auto ml-3 text-2xl font-semibold tracking-wider uppercase md:block text-navBar-light">
              portal
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
            <form className="relative hidden ml-12 rounded-md md:block place-self-center bg-search-box w-370 h-9">
              <div className="absolute top-2 left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-search-icon"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full pl-8 text-sm font-semibold tracking-wider bg-transparent focus:outline-none text-search-icon"
              />
            </form>
          </li>
        </ul>
        <ul className="flex my-auto justify-evenly w-180">
          <li className="my-auto">
            <img src={CanadaFlag} className="h-5" alt="flag" />
          </li>

          <li className="my-auto">
            <a rel="noopener" href="https://devslane.com">
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
                className="text-navBar-light"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </li>

          <li className="relative my-auto">
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
              className="text-navBar-light"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="absolute rounded-full right-online-right -top-1 h-online-status w-online-status bg-online-status"></span>
          </li>
          <li className="my-auto">
            <img
              className="rounded h-7 w-7"
              src={DisplayPicture}
              alt="display profile"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBar.defaultProps = {};

export default React.memo(NavBar);