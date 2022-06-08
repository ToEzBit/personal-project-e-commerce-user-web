import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

function AuthLayout() {
  return (
    <>
      <div className="">
        <HeaderMenu />
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
