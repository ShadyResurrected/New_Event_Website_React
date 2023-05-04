import React from "react";

import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user?._id) {
    toast.error("Login First");
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
