import React from "react";
import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";

export default function Require({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
}
