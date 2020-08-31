import React from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import Homepage from "./homepage/Homepage";
import useAuth from "./auth/useAuth";
import firebase from "../firebase/firebase";
import FirebaseContext from "../firebase/context";

const App = () => {
  const user = useAuth();

  return (
    <Router>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/home" /> : <LandingPage />}
          </Route>
          <Homepage />
        </Switch>
      </FirebaseContext.Provider>
    </Router>
  );
};

export default App;
