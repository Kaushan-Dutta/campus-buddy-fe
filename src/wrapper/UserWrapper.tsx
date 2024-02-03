import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import Notification from "../components/Notification/Notification";

const UserWrapper:React.FC = () => {
  return (
    <div className="flex flex-row justify-between space-x-10">
      <div className="">
        <SideMenu />
        <Notification />
      </div>
      <Outlet />
    </div>
  );
};

export default UserWrapper;
