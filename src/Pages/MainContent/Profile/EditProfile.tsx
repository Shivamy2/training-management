import { useFormik } from "formik";
import React from "react";
import Avatar from "../../../Components/Avatar/Avatar";
import Button from "../../../Components/Button/Button";
import EditInput from "../../../Components/Input/EditInput";
import * as yup from "yup";
import { store, useAppSelector } from "../../../Store/store";
import { authSelector } from "../../../selectors/auth.selectors";
import { meUpdate } from "../../../actions/auth.actions";

interface Props {}

const EditProfile: React.FC<Props> = () => {
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
      birth_date: user?.birth_date ? user.birth_date : "Day",
      birth_month: user?.birth_month ? user.birth_month : "Month",
      birth_year: user?.birth_year ? user.birth_year : "Year",
      first_name: user?.first_name ? user.first_name : "",
      middle_name: user?.middle_name ? user.middle_name : "",
      last_name: user?.last_name ? user.last_name : "",
      email: user?.email ? user.email : "",
      education: user?.education ? user.education : "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email is required field!")
        .email(() => "Email is invalid"),
      first_name: yup
        .string()
        .required("First Name is required Field!")
        .max(20, ({ max }) => `First Name must be of ${max} chars`)
        .min(3, ({ min }) => `Must be more than ${min} chars`),
      middle_name: yup
        .string()
        .max(20, ({ max }) => `Middle Name must be of ${max} chars`)
        .min(3, ({ min }) => `Must be more than ${min} chars`),
      education: yup
        .string()
        .required()
        .max(40, ({ max }) => `School/College name must be of ${max} chars`),
      last_name: yup
        .string()
        .required("Last Name is required Field!")
        .max(20, ({ max }) => `Last Name must be of ${max} chars`)
        .min(3, ({ min }) => `Must be more than ${min} chars`),
    }),
    onSubmit: (data) => {
      console.log(data);
      store.dispatch(meUpdate(data));
    },
  });

  return (
    <div className="w-full h-full p-5 pb-20">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="bg-white border border-gray-300 rounded-t-md">
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
                  <EditInput
                    {...getFieldProps("middle_name")}
                    className="mt-6 md:ml-3 md-lg:mt-0 md:flex-1 md:mt-9"
                    type="text"
                    labelText="Middle Name"
                    touched={touched.middle_name}
                    errorMessage={errors.middle_name}
                    placeholder="Middle Name"
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
              <div className="space-y-3 md:flex">
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
                  <EditInput
                    className="md:mt-4"
                    type="email"
                    labelText="Email*"
                    touched={touched.email}
                    errorMessage={errors.email}
                    placeholder="Email"
                    {...getFieldProps("email")}
                  />
                  <EditInput
                    className="pt-3"
                    type="text"
                    labelText="Education*"
                    touched={touched.education}
                    errorMessage={errors.education}
                    placeholder="Education"
                    {...getFieldProps("education")}
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
