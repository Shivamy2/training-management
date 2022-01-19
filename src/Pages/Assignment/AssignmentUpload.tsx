import axios from "axios";
import { Formik } from "formik";
import React from "react";
import Button from "../../Components/Button/Button";
import { BASE_URL } from "../../Constants/constants";
import * as yup from "yup";
import InputField from "../../Components/Input/InputField";
import { MdSubtitles } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

interface Props {}

const AssignmentUpload: React.FC<Props> = () => {
  //   const initialValues = {
  //     file: null,
  //     title: "",
  //     description: "",
  //     total_credit: 0,
  //   };
  //   const validationSchema = yup.object().shape({
  //     email: yup.string().email().required("Email is required field"),
  //     username: yup.string().required("Username is required field"),
  //     passsword: yup.string().required("Password is required field"),
  //   });
  //   const validationSchema = yup.object().shape({
  //     email: yup.string().email().required("Email is required field"),
  //     username: yup.string().required("Username is required field"),
  //     passsword: yup.string().required("Password is required field"),
  //   });

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required field"),
    description: yup.string().required("Description is required field"),
    total_credit: yup.string().required("Total credit is a required field"),
  });

  return (
    <div className="p-6">
      <div className="mb-5 mt-2">
        {/* <Alert
          typeMessage={false}
          className=""
          title={"You have no trainees. Add trainees"}
          alertType="warning"
        /> */}
      </div>
      <div className="font-extrabold my-6 tracking-wider text-2xl md-lg:text-3xl text-center text-primary">
        Upload Assignments
      </div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          total_credit: "",
          file: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // const filteredData = {
          //   title: data.title,
          //   description: data.description,
          //   total_credit: data.title,
          // };
          // const json = JSON.stringify(filteredData);
          // const blob = new Blob([json], {
          //   type: "application/json",
          // });
          const datas = new FormData();
          datas.append("file", values.file);
          datas.append("title", values.title);
          datas.append("description", values.description);
          datas.append("total_credit", values.total_credit);
          console.log(datas);
          axios({
            method: "post",
            url: `${BASE_URL}/api/assignment/upload`,
            data: datas,
            // params: {
            //   file: data.file,
            // },
          });
        }}
      >
        {({ values, handleSubmit, handleChange, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-6 -space-y-4 md-lg:flex md-lg:space-x-4 md-lg:px-5"></div>
            <div className="flex flex-col justify-center md-lg:px-10 space-y-6">
              <div className="md-lg:flex md-lg:space-x-2 ">
                <div className="md-lg:flex-1">
                  <InputField
                    innerClass="bg-body text-sm pl-2"
                    onChange={handleChange}
                    value={values.title}
                    placeholder="Title"
                    name={`title`}
                    type="text"
                    //   errorMessage={}
                    required
                  >
                    <MdSubtitles className="text-warning" fontSize={40} />
                  </InputField>
                </div>
                <div className="flex justify-center md-lg:flex-1 md-lg:justify-start">
                  <div>
                    <InputField
                      innerClass="bg-body text-sm pl-2"
                      onChange={handleChange}
                      value={values.total_credit}
                      placeholder="Total Credit"
                      name={`total_credit`}
                      type="text"
                      //   errorMessage={}
                      required
                    >
                      <AiFillEdit className="text-warning" fontSize={40} />
                    </InputField>
                  </div>
                </div>
              </div>
              <div className="md-lg:flex space-y-6">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label font-semibold inline-block mb-2 text-gray-700"
                  >
                    Summary
                  </label>
                  <textarea
                    className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    id="exampleFormControlTextarea1"
                    rows={3}
                    cols={40}
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                    placeholder="What to do in assignment?"
                  ></textarea>
                </div>

                <div className="mb-3 flex text-center md-lg:text-left md-lg:ml-6 flex-1 flex-col">
                  <label
                    htmlFor="formFile"
                    className="form-label font-semibold inline-block mb-2 text-gray-700"
                  >
                    Document (optional)
                  </label>
                  <input
                    className="form-control mx-auto md-lg:mx-0 px-3 py-1.5 text-sm max-w-max font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                text="Submit"
                className="mx-auto"
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(AssignmentUpload);
