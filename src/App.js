import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import React, { useState,useEffect } from "react";

function App() {
  const [authUser, setAuthUser] = useState("");
  const location = useLocation();
  const setLoginStatus = (token, name) => {
    setAuthUser(name);
    localStorage.setItem("token", token);
  };
  
   useEffect(() => {
    window['strum']('routeChange', window.location.href);
  }, [location]);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login setLoginStatus={setLoginStatus} />
        </Route>

        <ProtectedRoute path="/dashboard">
          <Dashboard username={authUser} />
        </ProtectedRoute>

        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
