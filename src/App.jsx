import React from "react";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import Homepage from "./components/homepage/Homepage";
import useAuth from "./components/auth/useAuth";
import firebase from "./firebase/firebase";
import FirebaseContext from "./firebase/context";
import ForgotPassword from "./containers/ForgotPasswordPage";
import LoginPage from "./containers/LoginPage";

const App = () => {
  const user = useAuth();

  return (
    <Router>
      <FirebaseContext.Provider value={{ user, firebase }}>
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
          <Homepage />
        </Switch>
      </FirebaseContext.Provider>
    </Router>
  );
};

export default App;
