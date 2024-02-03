import React from "react";
import { Outlet } from "react-router-dom";

const AdminWrapper:React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminWrapper;
