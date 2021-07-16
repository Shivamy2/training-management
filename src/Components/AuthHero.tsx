import React from "react";

interface Props {}

const AuthHero: React.FC<Props> = () => {
  return (
    <div className="flex-1 hidden h-screen bg-black md:flex">
      <div className="w-full h-full m-auto bg-center bg-no-repeat bg-heroSize bg-authHero"></div>
    </div>
  );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
