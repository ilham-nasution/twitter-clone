import React, { useContext } from "react";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import Homepage from "./components/homepage/Homepage";
import ForgotPassword from "./containers/ForgotPasswordPage";
import LoginPage from "./containers/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const user = useContext(UserContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/home" /> : <LandingPage />}
        </Route>
        <Route exact path="/password_reset">
          <ForgotPassword />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute exact path="/home" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default App;
