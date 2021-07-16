import React, { useState } from "react";
import InputField from "../Components/Forms/InputField";
import Switch from "@material-ui/core/Switch";
import Direction from "../Components/Direction";
import { ImSpinner9, IoWarningOutline } from "react-icons/all";
import { useHistory } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = () => {
  const redirectHistory = useHistory();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isFormTouched, setIsFormTouched] = useState({
    email: false,
    password: false,
  });
  const [isSendingData, setIsSendingData] = useState(false);

  const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputFieldName = event.target.name;
    setFormData({ ...formData, [inputFieldName]: event.target.value });
  };

  const formSubmitAction = (event: any) => {
    event.preventDefault();
    setIsSendingData(true);
    setTimeout(() => {
      console.log(formData);
      setIsSendingData(false);
      redirectHistory.push("/dashboard");
    }, 5000);
  };

  const handleFocusBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFormTouched({ ...isFormTouched, [event.target.name]: true });
  };

  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsSwitchChecked(!isSwitchChecked);
  };

  let emailError = "";
  let passwordError = "";
  const formEmail = formData.email;
  const formPassword = formData.password;

  if (!formEmail) emailError = "Email is required field!";
  else if (!formEmail.endsWith("@gmail.com"))
    emailError = "Please enter a valid email id";

  if (!formPassword) passwordError = "Password is required field!";
  else if (formPassword.length < 8)
    passwordError = "Please enter more than 8 characters";

  return (
    <div className="w-screen h-screen md:flex md:flex-1">
      <div className="max-w-md px-10 mx-auto my-auto">
        <div className="pb-4">
          <p className="tracking-wider font-medium-semi text-4.5xl">
            Log In to
            <span className="font-bold uppercase text-primary"> Portal</span>
          </p>
          <div className="flex mt-2 text-sm font-semibold tracking-wider">
            <p>New Here?&nbsp;</p>
            <Direction text="Create an account" path="/signup" />
          </div>
        </div>
        <div className="w-full text-sm tracking-wider">
          <form onSubmit={formSubmitAction} method="POST">
            <div className="w-full mt-12">
              <InputField
                value={formData.email}
                onChange={handleFormDataChange}
                onBlur={handleFocusBlur}
                placeholder="Username or email"
                name="email"
                type="text"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(27, 85, 226, 0.24)"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </InputField>
              <hr className="w-full bg-black" />
              {isFormTouched.email && (
                <div className="flex mt-2 text-yellow-500">
                  {emailError && <IoWarningOutline className={"my-auto"} />}
                  <p className="ml-2 text-xs">{emailError}</p>
                </div>
              )}
              <InputField
                value={formData.password}
                onChange={handleFormDataChange}
                onBlur={handleFocusBlur}
                className="mt-10"
                placeholder="Password"
                name="password"
                type={isSwitchChecked ? "text" : "password"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(27, 85, 226, 0.24)"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-primary"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </InputField>
              <hr className="w-full bg-black" />
              {isFormTouched.password && (
                <div className="flex mt-2 text-yellow-500">
                  {passwordError && <IoWarningOutline className="my-auto" />}
                  <p className="ml-2 text-xs">{passwordError}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-8 md:flex-row md:justify-between">
              <div className="flex">
                <p className="my-auto font-semibold tracking-wider">
                  Show Password
                </p>
                <Switch
                  checked={isSwitchChecked}
                  onChange={handleSwitchChange}
                  name="checkedB"
                  className="ml-1 text-primary"
                  color="primary"
                />
              </div>
              <button
                disabled={isSendingData}
                type="submit"
                className={`px-4 mt-3 md:mt-0 py-2 w-24 duration-500 ease-in-out rounded-md shadow-xl hover:shadow-none bg-primary`}
              >
                <p className="text-sm font-semibold text-center text-white">
                  {isSendingData ? (
                    <ImSpinner9 className="mx-auto animate-spin" />
                  ) : (
                    "Log In"
                  )}
                </p>
              </button>
            </div>
            <div className="flex justify-center mt-14">
              <input
                className="my-auto rounded-sm outline-none focus:outline-none text-primary"
                type="checkbox"
              />
              <p className="ml-3 font-semibold text-gray-400">
                Keep me logged in
              </p>
            </div>
          </form>
          <Direction
            className="mt-5 text-center"
            textClassName="text-center text-base tracking-widest font-semibold text-primary"
            text="Forgot Password?"
            path="/login"
          />
          <p className="mt-16 font-semibold text-gray-700">
            &copy; 2020 All Rights Reserved.{" "}
            <span className="text-primary"> PORTAL </span> is a product of
            Designreset.{" "}
            <span className="text-primary">Cookie Preferences, Privacy</span>,
            and <span className="text-primary">Terms.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default React.memo(Login);
