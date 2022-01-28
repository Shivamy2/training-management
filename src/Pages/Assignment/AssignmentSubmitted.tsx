import axios from "axios";
import saveAs from "file-saver";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { AssignmentDetailSubmitDetailResponse } from "../../APIs/Assignment/assignment";
import EditInput from "../../Components/Input/EditInput";
import TextArea from "../../Components/Input/TextArea";
import { BASE_URL } from "../../Constants/constants";

interface Props {}

const AssignmentSubmitted: React.FC<Props> = () => {
  const [responseData, setResponseData] = useState<
    AssignmentDetailSubmitDetailResponse[]
  >();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function submittedAssignmentsFetch() {
      try {
        setLoading(true);
        const response = await axios.get<
          AssignmentDetailSubmitDetailResponse[]
        >(`${BASE_URL}/assignment/trainee/submit/all`);
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
            <div className="flex flex-col md-lg:flex-row-reverse justify-between">
              <p className="text-xs flex font-bold md-lg:text-base items-center">
                {"Score: "}
                <span className="text-sm font-normal md-lg:text-base italic">
                  &nbsp;{`${data.scoreCredit || "_"}/${data.totalCredit}`}
                </span>
              </p>
              <div className="font-extrabold text-xl my-2 text-primary">
                {data.title}
              </div>
            </div>
            <p className="text-sm">{data.description}</p>
          </div>
          <div className="text-sm">
            <p className="leading-none text-primary text-center">
              {data.name ? (
                <button
                  onClick={() => data?.url && saveAs(data?.url, data?.name)}
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
          <div className="space-y-4">
            <div className="text-xl text-warning font-bold">Submission</div>
            {data.link && (
              <div>
                <a
                  href={data.link}
                  target={"_blank"}
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <EditInput
                    value={data.link}
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
              value={data.solution}
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
              {data.name ? (
                <button
                  onClick={() => data?.url && saveAs(data?.url, data?.name)}
                  className="hover:bg-primary bg-primary-lite text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center"
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

export default React.memo(AssignmentSubmitted);
