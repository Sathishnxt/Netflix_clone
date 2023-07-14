import React from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
export default ProtectedRoute;

export const ProtectedRouteForUnAuthorizedPage = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
};
