import React from "react";
import { Redirect } from "react-router-dom";
import Direction from "../Components/Direction";
import { LS_LOGIN_TOKEN } from "../Constants/constants";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const loginToken = localStorage.getItem(LS_LOGIN_TOKEN);

  return loginToken ? (
    <div className="flex flex-1 h-screen">
      <div className="m-auto">
        <div className="text-center">
          <h1>This is Dashboard Page.</h1>
          <Direction
            text="Go to recordings page"
            path="/batch/1/recording/15"
          />
          <Direction
            text="Groups page using button"
            path="/movie-group-button"
          />
          <Direction text="Groups page without button" path="/movie-group" />
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
