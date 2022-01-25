import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { AssignmentSubmittedTrainerModal } from "../../APIs/Assignment/assignment";
import Button from "../../Components/Button/Button";
import EditInput from "../../Components/Input/EditInput";
import TextArea from "../../Components/Input/TextArea";
import { BASE_URL } from "../../Constants/constants";

interface Props {}

const AssignmentSubmittedTrainer: React.FC<Props> = () => {
  const [responseData, setResponseData] = useState<
    AssignmentSubmittedTrainerModal[]
  >();
  const [error, setError] = useState("");
  const [scoredCredit, setScoredCredit] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [loadUpdate, setLoadUpdate] = useState(false);
  const [messageUpdate, setMessageUpdate] = useState("");
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
        setError(error.response.data.message);
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
          {error || "You haven't submitted any assignment"}
        </div>
      )}
      {responseData?.map((data, index) => (
        <div
          key={index}
          className="border min-h-56 space-y-6 text-black shadow-xl rounded-xl bg-white p-4 leading-normal"
        >
          <div className="mb-8">
            <div className="flex flex-col md-lg:flex-row justify-between">
              <p className="text-xs flex font-bold md-lg:text-base items-center">
                {"Trainee: "}
                <span className="text-sm font-normal md-lg:text-base italic">
                  &nbsp;
                  {`${data.trainee.first_name} ${data.trainee.last_name}`}
                </span>
                <span className="text-sm font-semibold text-online-status md-lg:text-base italic">
                  &nbsp;
                  {`(Id: ${data.trainee.id})`}
                </span>
              </p>
              <p className="text-xs flex font-bold md-lg:text-base items-center">
                {"Score: "}
                &nbsp;
                <input
                  type="text"
                  name="scoredCredit"
                  onChange={(event) => setScoredCredit(event.target.value)}
                  placeholder={
                    data.assignment.scoredCredit === 0
                      ? "NA"
                      : data.assignment.scoredCredit.toString()
                  }
                  value={scoredCredit}
                  className="w-8 border rounded-md text-center"
                  inputMode="numeric"
                />
                &nbsp;
                <span className="text-sm font-normal md-lg:text-base italic">
                  {`/ ${data.assignment.totalCredit}`}
                </span>
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <div className="font-extrabold text-xl my-2 text-primary">
                {data.assignment.title}
              </div>
              <Button
                text="Update"
                submissionInProgress={loadUpdate}
                onClick={async (event) => {
                  event.preventDefault();
                  if (
                    window.confirm(
                      `Are you sure? Score Credit for ${data.assignment.title} will be updated as: ${scoredCredit}`
                    )
                  ) {
                    try {
                      setLoadUpdate(true);
                      const formData = new FormData();
                      formData.append("scored_credit", scoredCredit);
                      await axios.post(
                        `${BASE_URL}/assignment/submit/update/score_credit/${data.assignment.id}`,
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
            <p className="text-sm">{data.assignment.description}</p>
          </div>
          <div className="text-sm">
            <p className="leading-none text-primary text-center">
              {data?.assignmentFile?.name ? (
                <a
                  href={data?.assignmentFile.url}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download Question</span>
                  </button>
                </a>
              ) : (
                <div className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  {"No Document"}
                </div>
              )}
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-xl text-warning font-bold">Submission</div>
            {data.assignmentSubmitted?.link && (
              <div>
                <a
                  href={data.assignmentSubmitted.link || "nothing"}
                  target={"_blank"}
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <EditInput
                    value={data.assignmentSubmitted.link || "Absent"}
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
              value={data.assignmentSubmitted.description}
              disabled={true}
              className=""
              name="description"
              placeholder="Any comments or message regarding assignment solution"
              labelText="Solution"
              rows={4}
              cols={40}
            />
          </div>
          <div className="text-sm">
            <p className="leading-none text-primary text-center">
              {data?.solutionFile?.name ? (
                <a
                  href={data.solutionFile.url}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download Solution</span>
                  </button>
                </a>
              ) : (
                <div className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  {"No Document"}
                </div>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(AssignmentSubmittedTrainer);
