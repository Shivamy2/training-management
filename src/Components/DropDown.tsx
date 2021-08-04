import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../APIs/Auth/auth";
import Avatar from "./Avatar/Avatar";

interface Props {
  title?: string;
  containsImage?: boolean;
  image?: string;
  itemsToBeShown: { name: string; path?: string }[];
  initialButtonValue?: number;
  className?: string;
}

const DropDown: React.FC<Props> = ({
  itemsToBeShown,
  initialButtonValue,
  title,
  containsImage,
  className,
  image
}) => {
  const [selectedDropdown, setSelectedDropdown] = useState(initialButtonValue);
  const history = useHistory();

  return (
    <Menu as="div">
      <div>
        {containsImage ? (
          <Menu.Button className="pt-2 focus:outline-none">
            <Avatar
              size="small"
              src={
                "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" &&
                image
              }
              circular={false}
            />
          </Menu.Button>
        ) : (
          <Menu.Button className="relative flex bg-white border rounded-lg focus:outline-none pt-10px pb-9px pl-15px pr-35px w-115 border-button-border">
            <div>
              <p className="mr-5 text-13">
                {title ? title : itemsToBeShown[selectedDropdown!].name}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute my-auto top-3 right-3 text-hamburger-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </Menu.Button>
        )}
        <Transition
          as={Fragment}
          enter="transition ease-in-out duration-100"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute z-20 w-40 bg-white rounded-md shadow-xl mt-dropdown ring-2 ring-black ring-opacity-5 leading-0 right-5 focus:outline-none ${className}`}
          >
            <div className="py-1">
              {itemsToBeShown.map((item, index) => (
                <Menu.Item key={index}>
                  <button
                    onClick={() => {
                      setSelectedDropdown(index);
                      if (item.name === "Sign Out") {
                        logout();
                      }
                      item.path && history.push(item.path);
                    }}
                    className="flex items-center w-full px-2 py-2 text-sm hover:text-blue-500 hover:bg-gray-50"
                  >
                    <p>{item.name}</p>
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

DropDown.defaultProps = {
  initialButtonValue: 0,
};

export default React.memo(DropDown);
