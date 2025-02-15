import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingScreen from "@components/LoadingScreen";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    checkAuth();
  }, []);

  const userToken = localStorage.getItem("userToken");

  if (loading) {
    return <LoadingScreen />;
  }

  return isAuthenticated || userToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
