import React, { useState } from "react";
import InputField from "../Components/Forms/InputField";
import Switch from "@material-ui/core/Switch";
import Direction from "../Components/Direction";

interface Props {}

const Login: React.FC<Props> = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isFormTouched, setIsFormTouched] = useState({
    email: false,
    password: false,
  });

  const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputFieldName = event.target.name;
    setFormData({ ...formData, [inputFieldName]: event.target.value });
  };

  const formSubmitAction = (event: any) => {
    console.log(formData);
    event.preventDefault();
  };

  const handleFocusBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFormTouched({ ...isFormTouched, [event.target.name]: true });
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
      <div className="w-full mx-32 my-auto">
        <div>
          <p className="text-4xl">
            Log In to
            <span className="uppercase text-primary"> Training Portal</span>
          </p>
          <div className="flex">
            <p>New Here?&nbsp;</p>
            <Direction text="Create an account" path="/signup" />
          </div>
        </div>
        <div>
          <form onSubmit={formSubmitAction} method="POST">
            <div className="mt-8">
              <InputField
                value={formData.email}
                onChange={handleFormDataChange}
                onBlur={handleFocusBlur}
                autoComplete="email"
                placeholder="Username or email"
                name="email"
                type="text"
              >
                <svg
                  className="w-6 h-6 text-primary"
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
              <hr className="w-full bg-black" />
              {isFormTouched.email && (
                <div className="text-red-500">{emailError}</div>
              )}
              <InputField
                autoComplete="current-password"
                value={formData.password}
                onChange={handleFormDataChange}
                onBlur={handleFocusBlur}
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
                <div className="text-red-500">{passwordError}</div>
              )}
            </div>
            <div className="flex justify-between mt-8">
              <div className="flex">
                <p className="my-auto">Show Password</p>
                <Switch
                  name="checkedB"
                  className="ml-2 text-primary"
                  color="primary"
                />
              </div>
              <button
                type="submit"
                className={`px-6 py-3 duration-500 ease-in-out rounded-md shadow-2xl ${
                  !emailError && !passwordError ? "bg-primary" : "bg-blue-300"
                } hover:shadow-none}`}
              >
                <p className="text-sm text-center text-white">Log In</p>
              </button>
            </div>
            <div className="flex justify-center my-6">
              <input className="my-auto" type="checkbox" />
              <p className="ml-5">Keep me logged in</p>
            </div>
          </form>
          <Direction
            className="text-center underline text-primary"
            text="Forgot Password?"
            path="/login"
          />
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default React.memo(Login);
