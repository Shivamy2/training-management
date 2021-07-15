import React from "react";
import Direction from "../Components/Direction";
import InputField from "../Components/Forms/InputField";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="flex flex-1">
      <div className="">
        <p>Log In to Training Portal</p>
        <div className="flex">
          <p>New User?&nbsp;</p>
          <Direction text="create an account?" path="/signup" />
        </div>
        <div>
          <form action="" method="POST">
            <InputField placeholder="Username" name="username" type="text">
              <svg
                className="w-6 h-6 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </InputField>
            <hr className="bg-black w-72" />
            <InputField
              className="mt-5"
              placeholder="Password"
              name="password"
              type="password"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-blue-400"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </InputField>
            <hr className="bg-black w-72" />
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default React.memo(Login);
