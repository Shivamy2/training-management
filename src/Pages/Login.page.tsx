import React, { useState } from "react";
import InputField from "../Components/Input/InputField";
import { Switch } from "@headlessui/react";
import Direction from "../Components/Direction";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../Components/Button/Button";
import Copyright from "../Components/Copyright";
import FormSwitch from "../Components/FormSwitch";
import { login } from "../APIs/Auth/auth";
import Alert from "../Components/Alert/Alert";
import { loginToken, LS_LOGIN_TOKEN } from "../Constants/constants";

interface Props {}

const Login: React.FC<Props> = () => {
  const [loginFailedMessage, setLoginFailedMessage] = useState("");
  const {
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    getFieldProps,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email is required field!")
        .email(() => "Email is invalid"),
      password: yup
        .string()
        .required("Password is required field!")
        .min(6, ({ min }) => `Password must be atlease ${min} chars`),
    }),
    onSubmit: (data, { setSubmitting }) => {
      setLoginFailedMessage("");
      login(data)
        .then((response) => {
          setSubmitting(false);
          if (response?.status === 200) {
            console.log(response);
            localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
            window.location.href = "/dashboard";
          } else {
            console.log("Error", response?.statusText);
            setLoginFailedMessage("User not Found!");
          }
        })
        .catch((error) => {
          console.error("Not able to login", error);
        });
    },
  });
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  return !loginToken ? (
    <div className="w-screen min-h-screen bg-white md:w-1/2">
      <div className="max-w-md min-h-full px-10 py-4 mx-auto">
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
        {loginFailedMessage && (
          <div className="relative">
            <Alert
              className="absolute "
              title={loginFailedMessage}
              alertType="error"
            />
          </div>
        )}
        <div className="w-full text-sm tracking-wider">
          <form onSubmit={handleSubmit} method="POST">
            <div className="w-full mt-12">
              <InputField
                {...getFieldProps("email")}
                placeholder="Username or email"
                name="email"
                type="email"
                touched={touched.email}
                errorMessage={errors.email}
                required
              >
                <svg
                  className="absolute top-0 w-6 h-6 text-primary"
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

              <InputField
                {...getFieldProps("password")}
                placeholder="Password"
                name="password"
                type={isSwitchChecked ? "text" : "password"}
                touched={touched.password}
                errorMessage={errors.password}
                required
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(27, 85, 226, 0.24)"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute w-6 h-6 text-primary"
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
            </div>
            <div className="flex flex-col mt-8 md:flex-row md:justify-between">
              <Switch.Group>
                <div className="flex">
                  <Switch.Label className="mr-2 font-semibold text-gray-600">
                    Show Password
                  </Switch.Label>
                  <FormSwitch
                    checked={isSwitchChecked}
                    setCheckedStatus={() =>
                      setIsSwitchChecked(!isSwitchChecked)
                    }
                  />
                </div>
              </Switch.Group>
              <Button
                type="submit"
                buttonType="solid"
                theme="primary"
                text="Log in"
                className="mt-3 md:mt-0"
                submissionInProgress={isSubmitting}
              />
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
          <Copyright />
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
};

Login.defaultProps = {};

export default React.memo(Login);
