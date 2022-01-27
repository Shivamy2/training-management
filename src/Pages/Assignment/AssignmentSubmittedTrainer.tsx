import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { AssignmentSubmittedTrainerModal } from "../../APIs/Assignment/assignment";
import Button from "../../Components/Button/Button";
import EditInput from "../../Components/Input/EditInput";
import TextArea from "../../Components/Input/TextArea";
import { MdArrowUpward } from "react-icons/all";
import { BASE_URL } from "../../Constants/constants";
import { Disclosure } from "@headlessui/react";
import { saveAs } from "file-saver";

interface Props {}

const AssignmentSubmittedTrainer: React.FC<Props> = () => {
  const [responseData, setResponseData] = useState<
    AssignmentSubmittedTrainerModal[]
  >();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadUpdate, setLoadUpdate] = useState(false);
  const [messageUpdate, setMessageUpdate] = useState("");
  const [scoredCredit, setScoredCredit] = useState<string[][]>([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  useEffect(() => {
    async function submittedAssignmentsFetch() {
      try {
        setLoading(true);
        const response = await axios.get<AssignmentSubmittedTrainerModal[]>(
          `${BASE_URL}/assignment/trainer/all`
        );
        setLoading(false);
        setResponseData(response.data);
      } catch (error: any) {
        setError(error.response?.data.message);
      }
    }
    submittedAssignmentsFetch();
  }, []);

  return (
    <div className="p-6 w-full space-y-6">
      {messageUpdate && (
        <div className="text-center text-red-500 text-lg font-bold">
          {messageUpdate}
        </div>
      )}
      <div className="font-extrabold my-6 text-center tracking-wider text-2xl md-lg:text-3xl text-warning">
        Submitted Assignments
      </div>
      {loading && (
        <div className="">
          <ImSpinner9 className="w-12 h-12 mx-auto animate-spin" />
        </div>
      )}
      {!responseData?.length && (
        <div className="text-center text-primary text-lg font-bold">
          {error || "Nobody submitted assignment"}
        </div>
      )}
      {responseData?.map((data, outerIndex) => (
        <div
          key={outerIndex}
          className="border min-h-56 space-y-6 text-black shadow-xl rounded-xl bg-white p-4 leading-normal"
        >
          <div className="mb-8">
            <div className="flex justify-between mt-3">
              <div className="font-extrabold text-xl my-2 text-primary">
                {data.assignment.title}
              </div>
            </div>
            <p className="text-sm">{data.assignment.description}</p>
          </div>
          <div className="text-sm">
            <p className="leading-none text-primary text-center">
              {data?.assignmentFile?.name ? (
                <button
                  onClick={() =>
                    data.assignmentFile?.url &&
                    saveAs(data.assignmentFile.url, data.assignmentFile?.name)
                  }
                  className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download Question</span>
                </button>
              ) : (
                <div className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  {"No Document"}
                </div>
              )}
            </p>
          </div>
          <div>
            <Disclosure as={"div"} className="space-y-4 pt-8">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="button"
                    className="flex justify-between w-full bg-warning-light rounded-lg px-4 py-2 ring-1 ring-warning"
                  >
                    <div className="text-xl text-warning font-bold">
                      Submissions
                    </div>
                    <MdArrowUpward
                      className={
                        "bg-warning-light h-8 w-8 p-2 rounded-full cursor-pointer ring-2 ring-warning"
                      }
                      style={{
                        transform: `${
                          open ? "rotate(180deg)" : "rotate(0deg)"
                        }`,
                      }}
                    />
                  </Disclosure.Button>
                  {/* </Accordion.Header> */}
                  <Disclosure.Panel as="div" className="space-y-4">
                    {data.assignmentSubmittedDetails.map(
                      (details, innerIndex) => (
                        <div
                          key={innerIndex}
                          className="space-y-6 py-6 bg-gray-100 shadow-primary rounded-2xl px-4"
                        >
                          <div className="flex flex-col md-lg:flex-row justify-between space-y-2 md-lg:space-y-0">
                            <p className="text-sm flex font-bold md-lg:text-base items-center">
                              {"Trainee: "}
                              <span className="text-sm font-normal md-lg:text-base italic">
                                &nbsp;
                                {`${details.trainee.first_name} ${details.trainee.last_name}`}
                              </span>
                              <span className="text-sm font-semibold text-online-status md-lg:text-base italic">
                                &nbsp;
                                {`(Id: ${details.trainee.id})`}
                              </span>
                            </p>
                            <div className="space-y-2 md-lg:space-y-0 md-lg:space-x-6 md-lg:flex">
                              <p className="text-sm flex font-bold md-lg:text-base items-center">
                                {"Score: "}
                                &nbsp;
                                <input
                                  type="text"
                                  name={`scoredCredit[${outerIndex}][${innerIndex}]`}
                                  onChange={(event) =>
                                    setScoredCredit((prev) => {
                                      const newScoredCredit = [...prev];
                                      newScoredCredit[outerIndex][innerIndex] =
                                        event.target.value;
                                      return newScoredCredit;
                                    })
                                  }
                                  placeholder={
                                    details.assignmentSubmitted.scoredCredit ===
                                    0
                                      ? "NA"
                                      : details.assignmentSubmitted.scoredCredit.toString()
                                  }
                                  value={scoredCredit[outerIndex][innerIndex]}
                                  className="w-8 border rounded-md text-center"
                                  inputMode="numeric"
                                />
                                &nbsp;
                                <span className="text-sm font-normal md-lg:text-base italic">
                                  {`/ ${data.assignment.totalCredit}`}
                                </span>
                              </p>
                              <Button
                                text="Update"
                                submissionInProgress={loadUpdate}
                                onClick={async (event) => {
                                  event.preventDefault();
                                  if (
                                    +scoredCredit[outerIndex][innerIndex] >
                                    data.assignment.totalCredit
                                  )
                                    alert(
                                      "Score should not increase total score"
                                    );
                                  else if (
                                    window.confirm(
                                      `Are you sure? Score Credit for ${data.assignment.title} will be updated as: ${scoredCredit[outerIndex][innerIndex]}`
                                    )
                                  ) {
                                    try {
                                      setLoadUpdate(true);
                                      const formData = new FormData();
                                      formData.append(
                                        "scored_credit",
                                        scoredCredit[outerIndex][innerIndex]
                                      );
                                      await axios.post(
                                        `${BASE_URL}/assignment/submit/update/score_credit/${details.assignmentSubmitted.id}`,
                                        formData
                                      );
                                      setLoadUpdate(false);
                                      setMessageUpdate("Successfully updated");
                                    } catch (error) {
                                      setLoadUpdate(false);
                                      setMessageUpdate("Please try again!");
                                    }
                                  }
                                  console.log(scoredCredit);
                                }}
                              />
                            </div>
                          </div>
                          {details.assignmentSubmitted?.link && (
                            <div>
                              <a
                                href={
                                  details.assignmentSubmitted.link || "nothing"
                                }
                                target={"_blank"}
                                rel="noreferrer"
                                className="cursor-pointer"
                              >
                                <EditInput
                                  value={
                                    details.assignmentSubmitted.link || "Absent"
                                  }
                                  disabled={true}
                                  name="link"
                                  labelText="Link"
                                  placeholder="Github/Drive/Website link"
                                  labelClassName="text-base font-bold"
                                />
                              </a>
                            </div>
                          )}
                          <TextArea
                            value={details.assignmentSubmitted.description}
                            className=""
                            name="description"
                            draggable={false}
                            placeholder="Any comments or message regarding assignment solution"
                            labelText="Solution"
                            rows={4}
                            cols={40}
                          />
                          <div className="text-sm">
                            <p className="leading-none text-primary text-center">
                              {details?.solutionFile?.name ? (
                                <button
                                  onClick={() =>
                                    details.solutionFile?.url &&
                                    saveAs(
                                      details.solutionFile.url,
                                      details.solutionFile?.name
                                    )
                                  }
                                  className="bg-primary text-white font-bold py-2 px-4 rounded inline-flex items-center"
                                >
                                  <svg
                                    className="fill-current w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                  </svg>
                                  <span>Download Solution</span>
                                </button>
                              ) : (
                                <div className="bg-primary text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                  {"No Document"}
                                </div>
                              )}
                            </p>
                          </div>
                          {/* {index < data.assignmentSubmittedDetails.length - 1 && (
                  <hr className="w-full border- border-" />
                )} */}
                        </div>
                      )
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(AssignmentSubmittedTrainer);
