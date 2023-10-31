import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (!Cookies.get("id") && !Cookies.get("userName"))
    return <Navigate to="/" replace />;

  return children;
};

export default PrivateRoute;
