import { useFormik } from "formik";
import React from "react";
import Avatar from "../../../Components/Avatar/Avatar";
import Button from "../../../Components/Button/Button";
import EditInput from "../../../Components/Input/EditInput";
import * as yup from "yup";
import { store, useAppSelector } from "../../../Store/store";
import {
  authLoginErrorMessageSelector,
  authSelector,
} from "../../../selectors/auth.selectors";
import { meUpdate } from "../../../actions/auth.actions";
import Alert from "../../../Components/Alert/Alert";

interface Props {}

const EditProfile: React.FC<Props> = () => {
  const loginFailedMessage = useAppSelector(authLoginErrorMessageSelector);

  const user = useAppSelector(authSelector);
  let date: string[] = [];
  for (let index = 1; index <= 31; index++) {
    if (index >= 10) {
      date.push(index.toString());
    } else date.push("0" + index);
  }
  let month: string[] = [];
  for (let index = 1; index <= 12; index++) {
    if (index >= 10) {
      month.push(index.toString());
    } else month.push("0" + index);
  }
  let year: string[] = [];
  for (let index = 2018; index >= 1990; index--) {
    if (index >= 10) {
      year.push(index.toString());
    } else year.push("0" + index);
  }

  const {
    handleSubmit,
    handleReset,
    errors,
    touched,
    getFieldProps,
    isSubmitting,
  } = useFormik({
    initialValues: {
      gender: user?.gender ? user.gender : "Male",
      birth_date: user?.birth_date ? user.birth_date : "Day",
      birth_month: user?.birth_month ? user.birth_month : "Month",
      birth_year: user?.birth_year ? user.birth_year : "Year",
      first_name: user?.first_name ? user.first_name : "",
      last_name: user?.last_name ? user.last_name : "",
      area: user?.area ? user.area : "",
      district: user?.district ? user.district : "",
      city: user?.city ? user.city : "",
      pin_code: user?.pin_code ? user.pin_code : "",
      mobile_number: user?.mobile_number ? user.mobile_number : "",
    },
    validationSchema: yup.object().shape({
      first_name: yup
        .string()
        .required("First Name is required Field!")
        .max(20, ({ max }) => `First Name must be of ${max} chars`)
        .min(3, ({ min }) => `Must be more than ${min} chars`),
      last_name: yup
        .string()
        .required("Last Name is required Field!")
        .max(20, ({ max }) => `Last Name must be of ${max} chars`)
        .min(3, ({ min }) => `Must be more than ${min} chars`),
      area: yup
        .string()
        .required("Area is required field")
        .min(3, ({ min }) => `Area should be of ${min} chars`),
      city: yup
        .string()
        .required("City is required field")
        .min(3, ({ min }) => `City should be of ${min} chars`),
      district: yup
        .string()
        .required("District is required field")
        .min(3, ({ min }) => `District should be of ${min} chars`),
      pin_code: yup
        .number()
        .required("Pin code is required field")
        .min(6, ({ min }) => `Pin Code should be of ${min} chars`),
      gender: yup.string().required("Gender is required field"),
      mobile_number: yup
        .string()
        .max(10, ({ max }) => `Gender should be maximum ${max} chars`)
        .min(10, ({ min }) => `Gender should be minimum ${min} chars`),
    }),
    onSubmit: (data) => {
      console.log("Data for details is: ", data);
      store.dispatch(meUpdate(data));
    },
  });

  return (
    <div className="w-full h-full p-5 pb-20">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="bg-white border border-gray-300 rounded-t-md">
          {loginFailedMessage && (
            <div className="">
              <Alert title={loginFailedMessage} alertType="error" />
            </div>
          )}
          <div className="p-4">
            <div className="mt-1 mb-10 ml-2">
              <h2 className="text-base font-bold tracking-wider uppercase text-input">
                General Information
              </h2>
            </div>
            <div className="md-lg:flex md-lg:px-6 md-lg:space-x-10">
              <div className="pt-6 pr-6 md-lg:border-r md-lg:border-gray-300">
                <Avatar size="large" src={user?.profile_pic_url} />
                <p className="py-3 text-sm font-semibold tracking-wider text-primary">
                  Upload Picture
                </p>
              </div>
              <div className="space-y-3 md-lg:space-y-0 md-lg:flex-1 md-lg:pr-20">
                <div className="mt-3 md:flex">
                  <EditInput
                    {...getFieldProps("first_name")}
                    className="mt-9 md-lg:mt-0 md:flex-1"
                    labelText="First Name*"
                    type="text"
                    touched={touched.first_name}
                    errorMessage={errors.first_name}
                    placeholder="First Name"
                  />
                </div>
                <EditInput
                  {...getFieldProps("last_name")}
                  className="pt-3 md-lg:pt-6"
                  type="text"
                  labelText="Last Name*"
                  touched={touched.last_name}
                  errorMessage={errors.last_name}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <div className="space-y-3 md-lg:flex">
                <div className="mt-6 md:flex-1 md:mr-3">
                  <div className="col-sm-6">
                    <label className="mt-3 text-sm font-medium tracking-wide text-gray-500">
                      Date of Birth*
                    </label>
                    <div className="pt-2">
                      <div className="">
                        <select
                          {...getFieldProps("birth_date")}
                          className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-primary focus:shadow-primary"
                        >
                          <option>Day</option>
                          {date.map((number) => {
                            return <option key={number}>{number}</option>;
                          })}
                        </select>
                      </div>
                      <div className="py-2">
                        <select
                          {...getFieldProps("birth_month")}
                          className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-primary focus:shadow-primary"
                        >
                          <option>Month</option>
                          {month.map((number) => {
                            return <option key={number}>{number}</option>;
                          })}
                        </select>
                      </div>
                      <div>
                        <select
                          {...getFieldProps("birth_year")}
                          className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:border-primary focus:shadow-primary"
                        >
                          <option>Year</option>
                          {year.map((number) => {
                            return <option key={number}>{number}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="justify-between space-y-3 md:flex md:flex-col md:flex-1 md:mt-4 md:ml-3">
                  <div className="mt-3 md-lg:flex md-lg:space-y-0">
                    <EditInput
                      {...getFieldProps("area")}
                      className="mt-9 md-lg:mt-0 md:flex-1"
                      labelText="Area"
                      type="text"
                      touched={touched.area}
                      errorMessage={errors.area}
                      placeholder="Area"
                    />
                  </div>
                  <EditInput
                    {...getFieldProps("city")}
                    className="pt-3 md-lg:pt-6"
                    type="text"
                    labelText="City"
                    touched={touched.city}
                    errorMessage={errors.city}
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="md-lg:flex md-lg:space-x-6 space-y-3">
                <div className="flex-1 space-y-3 md-lg:space-y-0">
                  <EditInput
                    {...getFieldProps("district")}
                    className="pt-3"
                    type="text"
                    labelText="District"
                    touched={touched.district}
                    errorMessage={errors.district}
                    placeholder="District"
                  />
                  <EditInput
                    {...getFieldProps("pin_code")}
                    className="pt-3"
                    type="text"
                    labelText="Pin Code"
                    touched={touched.pin_code}
                    errorMessage={errors.pin_code}
                    placeholder="Pin code"
                  />
                </div>
                <div className="flex-1 space-y-3 md-lg:space-y-0">
                  <div>
                    <label className="text-sm font-medium tracking-wide text-gray-500">
                      Gender*
                    </label>
                    <select
                      {...getFieldProps("gender")}
                      className="w-full border-gray-400 mt-1 bg-white rounded-lg border px-2 py-2 my-auto tracking-wider outline-none "
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <EditInput
                    {...getFieldProps("mobile_number")}
                    className="pt-3"
                    type="text"
                    labelText="Mobile Number"
                    touched={touched.mobile_number}
                    errorMessage={errors.mobile_number}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-16 bg-gray-900 profile-submit rounded-b-md">
          <div className="flex justify-between px-5 py-3">
            <Button
              text="Save Changes"
              theme="success"
              type="submit"
              buttonType="outline"
              submissionInProgress={isSubmitting}
            />
            <Button
              onClick={(event) => handleReset.call(null, event)}
              text="Reset All"
              buttonType="outline"
              type="reset"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

EditProfile.defaultProps = {};

export default React.memo(EditProfile);
