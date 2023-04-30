import React from "react";

import { Navigate } from "react-router-dom";

export default function Require({ children }) {
  const data = localStorage.getItem("profile");

  const profile = JSON.parse(data);

  if (profile === null) {
    return <Navigate to="/signin" />;
  }
  return children;
}
