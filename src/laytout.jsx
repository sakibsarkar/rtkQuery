import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
const MainLayout = () => {
  return (
    <div className="w-scren h-screen flex items-start justify-start">
      <Sidebar />
      <div className="w-[calc(100%-270px)] h-full bg-[#2c3541] px-[20px] py-[50px] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
