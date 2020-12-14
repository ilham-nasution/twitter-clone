import React from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Homepage from "./components/homepage/Homepage";
import useAuth from "./components/auth/useAuth";
import firebase from "./firebase/firebase";
import FirebaseContext from "./firebase/context";
import ForgotPassword from "./components/landingpage/ForgotPassword";

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
          <Homepage />
        </Switch>
      </FirebaseContext.Provider>
    </Router>
  );
};

export default App;
