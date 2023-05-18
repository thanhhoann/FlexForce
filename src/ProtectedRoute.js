import React from "react";
import { Navigate } from "react-router-dom";
import { AuthStatus } from "./slices/authSlice";
import { SIGNIN } from "./utils/route_name";
import { persistAuthStatus } from "./utils/helpers/local-storage.helper";

const ProtectedRoute = ({ children }) => {
  if (persistAuthStatus === AuthStatus.UNAUTHORIZED) {
    return <Navigate to={SIGNIN} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
