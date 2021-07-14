import React from "react";
import Direction from "../Components/Direction";

interface Props {}

const LandingPage: React.FC<Props> = () => {
  return (
    <div className="flex flex-col h-screen">
      <Direction text="Login Here" path="/login" />
      <Direction text="Go To Dashboard" path="/dashboard" />
    </div>
  );
};

LandingPage.defaultProps = {};

export default React.memo(LandingPage);
