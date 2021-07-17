import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Copyright from "../Components/Copyright";
import Direction from "../Components/Direction";
import * as yup from "yup";
import InputField from "../Components/Forms/InputField";
import Switch from "@material-ui/core/Switch";
import Button from "../Components/Forms/Button";

interface Props {}

const SignUp: React.FC<Props> = () => {
  const redirectHistory = useHistory();

  const { handleSubmit, errors, touched, isSubmitting, getFieldProps } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: yup.object().shape({
        username: yup
          .string()
          .required("Username is required field!")
          .min(8, ({ min }) => `Username must be ${min} chars`),
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
        setTimeout(() => {
          console.log(data);
          setSubmitting(false);
          redirectHistory.push("/login");
        }, 5000);
      },
    });
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsSwitchChecked(!isSwitchChecked);
  };

  return (
    <div className="w-screen h-screen md:flex md:flex-1">
      <div className="max-w-md px-10 mx-auto my-auto">
        <div className="pb-4">
          <p className="tracking-wider font-medium text-4.5xl">
            Get started with a free account
          </p>
          <div className="flex mt-2 text-sm font-semibold tracking-wider">
            <p>Already have an account?&nbsp;</p>
            <Direction text="Log in" path="/login" />
          </div>
        </div>
        <div className="w-full text-sm tracking-wider">
          <form onSubmit={handleSubmit} method="POST">
            <div className="w-full mt-12">
              <InputField
                {...getFieldProps("username")}
                placeholder="Username"
                name="username"
                type="text"
                touched={touched.username}
                errorMessage={errors.username}
                required
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

              <InputField
                {...getFieldProps("email")}
                placeholder="Email"
                className="mt-10"
                name="email"
                type="text"
                touched={touched.email}
                errorMessage={errors.email}
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
                  className="w-6 h-6 text-primary"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
              </InputField>

              <InputField
                {...getFieldProps("password")}
                className="mt-10"
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
            </div>
            <div className="flex mt-10">
              <input
                className="my-auto rounded-sm outline-none focus:outline-none text-primary"
                type="checkbox"
              />
              <p className="ml-3 font-semibold text-gray-400">
                I agree to the
                <Link className="text-primary" to="https://devslane.com">
                  {" "}
                  terms and conditions
                </Link>
              </p>
            </div>
            <div className="flex flex-col mt-8 md:flex-row md:justify-between">
              <div className="flex">
                <p className="my-auto font-semibold tracking-wider text-gray-600">
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
              <Button text="Get Started!" submissionInProgress={isSubmitting} />
            </div>
          </form>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

SignUp.defaultProps = {};

export default React.memo(SignUp);
