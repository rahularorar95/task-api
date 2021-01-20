import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children }) {
  return (
    <Route
      render={({ location }) =>
        localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
