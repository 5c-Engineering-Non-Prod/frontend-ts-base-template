import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-row justify-between antialiased text-gray-800">
        <Sidebar />
        <div className="bg-gray-50 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
