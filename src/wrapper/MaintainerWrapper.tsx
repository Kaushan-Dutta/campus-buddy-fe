import React from "react";
import { Outlet } from "react-router-dom";

const MaintainerWrapper:React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MaintainerWrapper;
