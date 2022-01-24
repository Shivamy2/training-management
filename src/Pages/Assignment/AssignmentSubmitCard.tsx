import { Formik } from "formik";
import React from "react";
import { assignmentSubmit } from "../../actions/assignment.action";
import { AssignmentResponse } from "../../APIs/Assignment/assignment";
import Button from "../../Components/Button/Button";
import EditInput from "../../Components/Input/EditInput";
import TextArea from "../../Components/Input/TextArea";
import { assignmentSubmitLoadingSelector } from "../../selectors/assignment.selectors";
import { store, useAppSelector } from "../../Store/store";
import * as yup from "yup";

interface Props {
  data: AssignmentResponse;
}

const AssignmentSubmitCards: React.FC<Props> = ({ data }) => {
  const loading = useAppSelector(assignmentSubmitLoadingSelector);

  return (
    <div className="min-w-full">
      <div className="border min-h-56 space-y-6 text-black shadow-xl rounded-xl bg-white p-4 leading-normal">
        <div>
          <div className="mb-8">
            {data?.isActive ? (
              <p className="text-green-50 text-sm mb-2 px-2 py-1 bg-green-600 max-w-max rounded-full">
                Active
              </p>
            ) : (
              <p className="text-red-50 text-sm mb-2 px-2 py-1 bg-red-600 max-w-max rounded-full">
                Expired
              </p>
            )}
            <div className="md-lg:flex justify-between">
              <p className="text-xs flex font-bold md-lg:text-base items-center">
                {"Due date: "}
                <span className="text-sm font-normal md-lg:text-base italic">
                  &nbsp;{data.dueDate}
                </span>
              </p>
              <p className="text-xs flex font-bold md-lg:text-base items-center">
                {"Credits: "}
                <span className="text-sm font-normal md-lg:text-base italic">
                  &nbsp;{`${data.scoredCredit || "_"}/${data.totalCredit}`}
                </span>
              </p>
            </div>
            <div className="font-extrabold text-xl my-2 text-primary">
              {data.title}
            </div>
            <p className="text-sm">{data.description}</p>
          </div>
          <div className="text-sm">
            <p className="leading-none text-primary text-center">
              {data.name ? (
                <a href={data?.url} target={"_blank"} rel="noreferrer">
                  <button className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download Document</span>
                  </button>
                </a>
              ) : (
                <div className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  {"No Document Found"}
                </div>
              )}
            </p>
          </div>
        </div>
        <Formik
          initialValues={{
            link: "",
            description: "",
            file: "",
          }}
          validationSchema={yup.object().shape({
            description: yup.string().required("This is required field"),
          })}
          onSubmit={(values) => {
            console.log("Submittion details: ", values);
            // if (
            //   window.confirm(
            //     "Are you sure? Assignment submmitted will not fallback."
            //   )
            // ) {
            store.dispatch(
              assignmentSubmit({
                assignment_id: data.id,
                description: values.description,
                link: values.link,
                file: values.file,
              })
            );
            // }
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            touched,
            errors,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="text-xl text-warning font-bold">Submission</div>
                <div>
                  <EditInput
                    disabled={!data.isActive}
                    onChange={handleChange}
                    name="link"
                    value={values.link}
                    touched={touched.link}
                    errorMessage={errors.link}
                    labelText="Link(optional)"
                    placeholder="Github/Drive/Website link"
                    labelClassName="text-base font-bold"
                  />
                </div>
                <TextArea
                  disabled={!data.isActive}
                  touched={touched.description}
                  errorMessage={errors.description}
                  onChange={handleChange}
                  name="description"
                  value={values.description}
                  placeholder="Any comments or message regarding assignment solution"
                  labelText="Solution*"
                  rows={4}
                  cols={40}
                />
                <div className="mb-3 flex flex-1 flex-col">
                  <label
                    htmlFor="formFile"
                    className="form-label font-semibold inline-block mb-2 text-gray-500"
                  >
                    Upload Document
                  </label>
                  <input
                    disabled={!data.isActive}
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
                <div className="text-center">
                  <Button
                    text="Submit"
                    type="submit"
                    theme="warning"
                    disabled={!data.isActive}
                    submissionInProgress={loading}
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default React.memo(AssignmentSubmitCards);
