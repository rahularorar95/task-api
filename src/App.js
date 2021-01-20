import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import ProtectedRoute from "./ProtectedRoute"
import './App.css';

function App() {

  
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>

        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>


        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
