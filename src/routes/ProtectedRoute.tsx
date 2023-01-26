import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/utils/hook";

const ProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  return Object.keys(user).length ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
