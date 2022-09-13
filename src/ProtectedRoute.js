import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelect, authStatus } from './slices/authSlice';
import { SIGNIN } from './utils/route_name';

const ProtectedRoute = ({ children }) => {
  const authStatus = useSelector(authSelect).authStatus;

  if (authStatus === authStatus.UNAUTHORIZED)
    return <Navigate to={SIGNIN} replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
