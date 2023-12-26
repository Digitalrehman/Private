import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  let isusers = localStorage.getItem("isuserlogin");
  return <>{isusers ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
