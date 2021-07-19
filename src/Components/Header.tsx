import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className="fixed w-full bg-header h-header">
      <div className="flex justify-between h-full px-4">
        <div className="flex my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-hamburger"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <h2 className="ml-3 font-bold tracking-wider sm-md:hidden text-15 text-hamburger">
            Sales
          </h2>
          <h2 className="hidden ml-6 tracking-wider sm-md:block text-14 text-hamburger">
            Dashboard <span className="font-bold"> / Sales</span>
          </h2>
        </div>

        <div className="my-auto">
          <Menu as="div">
            <div className="bg-white">
              <Menu.Button className="flex px-4 py-2 border rounded-lg focus:outline-none border-button-border">
                <p className="mr-5 text-13">Settings</p>
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
                  className="my-auto text-hamburger-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-in-out duration-100"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute w-40 bg-white rounded-md shadow-xl mt-dropdown ring-2 ring-black ring-opacity-5 leading-0 right-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button className="flex items-center w-full px-2 py-2 text-sm hover:text-blue-500 hover:bg-gray-50">
                          {active ? <p>Settings</p> : <p>Settings</p>}
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button className="flex items-center w-full px-2 py-2 text-sm hover:text-blue-500 hover:bg-gray-50">
                          {active ? <p>Mail</p> : <p>Mail</p>}
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button className="flex items-center w-full px-2 py-2 text-sm hover:text-blue-500 hover:bg-gray-50">
                          {active ? <p>Print</p> : <p>Print</p>}
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button className="flex items-center w-full px-2 py-2 text-sm hover:text-blue-500 hover:bg-gray-50">
                          {active ? <p>Download</p> : <p>Download</p>}
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button className="flex items-center w-full px-2 py-2 text-sm hover:text-blue-500 hover:bg-gray-50">
                          {active ? <p>Share</p> : <p>Share</p>}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
