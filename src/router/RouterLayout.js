import React from "react";
import { Outlet } from "react-router-dom";
import { WG_Navbar } from "../components/WG_Navbar/WG_Navbar";

export const RouterLayout = () => {
  return (
    <React.Fragment>
      <WG_Navbar />
      <Outlet />
    </React.Fragment>
  );
};