import { Formik } from "formik";
import { assignmentLoading } from "../../selectors/assignment.selectors";
import { store, useAppSelector } from "../../Store/store";
import * as yup from "yup";
import { assignmentUpload } from "../../actions/assignment.action";
import EditInput from "../../Components/Input/EditInput";
import DatePicker from "react-datepicker";
import Button from "../../Components/Button/Button";
import React from "react";

interface Props {}

const AssignmentUpload: React.FC<Props> = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required field"),
    description: yup.string().required("Description is required field"),
    total_credits: yup.string().required("Total credit is a required field"),
  });

  const loading = useAppSelector(assignmentLoading);
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        total_credits: "",
        due_date: new Date(),
        file: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        store.dispatch(assignmentUpload(values));
        helpers.resetForm();
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        setFieldValue,
        touched,
        errors,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="w-full mt-6 -space-y-4 md-lg:flex md-lg:space-x-4 md-lg:px-5"></div>
          <div className="flex flex-col justify-center md-lg:px-10 space-y-6">
            <div className="md-lg:flex md-lg:space-x-2 space-y-6 md-lg:space-y-0">
              <div className="md-lg:flex-1">
                {/* <AiFillEdit className="text-warning" fontSize={40} /> */}
                <EditInput
                  placeholder="Enter here"
                  touched={touched.title}
                  errorMessage={errors.title}
                  labelText="Title"
                  type="text"
                  onChange={handleChange}
                  value={values.title}
                  name={`title`}
                  labelClassName="font-semibold text-base text-black"
                />
              </div>
              <div className="flex md-lg:flex-1 md-lg:justify-start space-x-2">
                <div className="md-lg:mx-auto">
                  <EditInput
                    placeholder="Enter here"
                    touched={touched.description}
                    errorMessage={errors.description}
                    type="number"
                    onChange={handleChange}
                    value={values.total_credits}
                    name={`total_credits`}
                    labelText="Total Credits"
                    labelClassName="font-semibold text-base text-black"
                  />
                </div>
                <div className="mx-auto">
                  <label
                    // htmlFor={}
                    className={
                      "font-semibold mb-6 tracking-wide text-gray-500 "
                    }
                  >
                    {"Due Date"}
                  </label>
                  <div className="relative top-1.5">
                    <div className="flex absolute z-50 inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    {/* <select
                    type="date"
                    // value={values.due_date && new Date(values.due_date)}
                    className="bg-white border text-gray-400 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-primary block w-full pl-10 p-2"
                    placeholder="Select date"
                  /> */}
                    <DatePicker
                      className="pl-10 py-2 mt-0.5 border border-gray-400 rounded-lg"
                      selectsStart
                      startDate={values.due_date}
                      name="due_date"
                      selected={
                        (values.due_date && new Date(values.due_date)) || null
                      }
                      onChange={(val) => {
                        setFieldValue("due_date", val);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md-lg:flex space-y-6">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label font-semibold inline-block mb-2 text-gray-500"
                >
                  Summary
                </label>
                <textarea
                  className="form-control w-full px-3 py-1.5 text-base font-medium bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  id="exampleFormControlTextarea1"
                  rows={3}
                  cols={40}
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="What to do in assignment?"
                ></textarea>
              </div>

              <div className="mb-3 flex text-left md-lg:ml-6 flex-1 flex-col">
                <label
                  htmlFor="formFile"
                  className="form-label font-semibold inline-block mb-2 text-gray-500"
                >
                  Document (optional)
                </label>
                <input
                  className="form-control px-3 py-1.5 text-sm max-w-max font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  name="file"
                  onChange={(event: any) => {
                    // setData((prev) => {
                    //   return { ...prev, file: event.target.files[0] };
                    // });
                    setFieldValue("file", event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="text-center my-8">
            <Button
              type="submit"
              buttonType="solid"
              theme="primary"
              text="Upload"
              className="mx-auto"
              submissionInProgress={loading}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default React.memo(AssignmentUpload);
