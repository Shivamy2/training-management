import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Copyright from "../../Components/Copyright";
import Direction from "../../Components/Direction";
import * as yup from "yup";
import InputField from "../../Components/Input/InputField";
import { Switch } from "@headlessui/react";
import Button from "../../Components/Button/Button";
import { IoWarningOutline } from "react-icons/io5";
import FormSwitch from "../../Components/FormSwitch";
import { loginToken } from "../../Constants/constants";
import { store, useAppSelector } from "../../Store/store";
import { meSignup } from "../../actions/auth.actions";
import { authLoginErrorMessageSelector } from "../../selectors/auth.selectors";
import Alert from "../../Components/Alert/Alert";

interface Props {}

const SignUp: React.FC<Props> = () => {
  const loginFailedMessage = useAppSelector(authLoginErrorMessageSelector);
  const {
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    getFieldProps,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "ROLE_TRAINEE",
      acceptTerms: false,
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
      acceptTerms: yup
        .bool()
        .required("Accept Terms is required field")
        .oneOf([true], "Accept Terms before submit"),
    }),
    onSubmit: (data, { setSubmitting }) => {
      console.log("Signup data: ", data);
      setSubmitting(false);
      store.dispatch(
        meSignup({
          username: data.username,
          email: data.email,
          password: data.password,
          roles: { roleName: data.role, username: data.username },
        })
      );
    },
  });
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  return !loginToken ? (
    <div className="w-screen h-screen bg-white md:w-1/2">
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
            <div className="w-full mt-20">
              <select
                {...getFieldProps("role")}
                className="w-full border-primary mb-2 bg-white rounded-lg border-2 px-2 py-3 my-auto font-semibold tracking-wider outline-none "
              >
                <option value="ROLE_TRAINEE">Trainee</option>
                <option value="ROLE_TRAINER">Trainer</option>
              </select>
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
                  className="absolute w-6 h-6 text-primary"
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
                name="email"
                type="email"
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
                  className="absolute w-6 h-6 text-primary"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
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
            <div className="flex mt-6">
              <input
                className="my-auto rounded-sm outline-none focus:outline-none text-primary"
                type="checkbox"
                {...getFieldProps("acceptTerms")}
              />
              <label
                className="ml-3 font-semibold text-gray-400"
                htmlFor="acceptTerms"
              >
                I agree to the
                <Link className="text-primary" to="https://devslane.com">
                  {" "}
                  terms and conditions
                </Link>
              </label>
            </div>
            {touched.acceptTerms && (
              <div className="relative">
                <div className="absolute flex mt-2 text-yellow-600">
                  {errors.acceptTerms && (
                    <IoWarningOutline className={"my-auto"} />
                  )}
                  <p className="ml-2 text-xs">{errors.acceptTerms}</p>
                </div>
              </div>
            )}
            <div className="flex flex-col mt-10 md:flex-row md:justify-between">
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
              <div className="flex"></div>
              <Button
                type="submit"
                className="mt-3 md:mt-0"
                buttonType="solid"
                theme="primary"
                text="Get Started!"
                submissionInProgress={isSubmitting}
              />
            </div>
          </form>
          <Copyright />
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
};

SignUp.defaultProps = {};

export default React.memo(SignUp);
