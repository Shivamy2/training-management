import { Formik } from "formik";
import React, { useState } from "react";
import { bulkTraineeLoadingSelector } from "../../selectors/trainee.selectors";
import { store, useAppSelector } from "../../Store/store";
import * as yup from "yup";
import { bulkTraineeSendData } from "../../actions/trainee.constants";
import InputField from "../Input/InputField";
import { AiFillPlusCircle } from "react-icons/ai";
import Button from "../Button/Button";

interface Props {}

const AddTrainee: React.FC<Props> = () => {
  const bulkTraineeLoading = useAppSelector(bulkTraineeLoadingSelector);

  const [data, setData] = useState([{ email: "", username: "", password: "" }]);
  const initialValues = {
    data: data,
  };
  //   const validationSchema = yup.object().shape({
  //     email: yup.string().email().required("Email is required field"),
  //     username: yup.string().required("Username is required field"),
  //     passsword: yup.string().required("Password is required field"),
  //   });
  const validationSchema = yup.array().of(
    yup.object().shape({
      email: yup.string().email().required("Email is required field"),
      username: yup.string().required("Username is required field"),
      passsword: yup.string().required("Password is required field"),
    })
  );

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, helper) => {
        store.dispatch(bulkTraineeSendData(values));
        helper.resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {data.map((data, index) => (
            <div
              className="w-full mt-6 -space-y-4 md-lg:flex md-lg:space-x-4 md-lg:px-5"
              key={index}
            >
              <p className="font-extrabold mt-2.5 mr-2 text-lg text-gray-600 text-center mb-5">
                {index + 1}
              </p>
              <InputField
                innerClass="bg-body text-sm"
                onChange={handleChange}
                value={values.data[index]?.email}
                placeholder="Email"
                name={`data[${index}].email`}
                type="email"
                //   errorMessage={}
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
                outerClass="p-0"
                innerClass="bg-body text-sm"
                placeholder="Username"
                onChange={handleChange}
                value={values.data[index]?.username}
                name={`data[${index}].username`}
                type="username"
                //   touched={touched[index]?.username}
                //   errorMessage={errors[index]?.username}
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
                outerClass="p-0"
                innerClass="bg-body text-sm"
                onChange={handleChange}
                value={values.data[index]?.password}
                placeholder="Password"
                name={`data[${index}].password`}
                type="password"
                //   touched={touched[index]?.password}
                //   errorMessage={errors[index]?.password}
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
          ))}
          <div
            onClick={() =>
              setData((prev) => {
                let newTrainee = [...prev];
                newTrainee.push({ email: "", username: "", password: "" });
                return newTrainee;
              })
            }
            className="flex space-x-3 max-w-max cursor-pointer mx-auto mt-10"
          >
            <AiFillPlusCircle className="h-8 w-8 text-primary" />
            <p className="font-extrabold my-auto tracking-wider text-xl">
              Add More
            </p>
          </div>
          <div className="text-center my-8">
            <Button
              type="submit"
              buttonType="solid"
              theme="primary"
              text="Submit"
              className="mx-auto"
              submissionInProgress={bulkTraineeLoading}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default React.memo(AddTrainee);
